import { useRef } from 'react';

import {
  useConditionEffect,
  useResizeObserver,
  useSsr,
  useEventListener,
} from '@/lib/hooks';

import { domController, RectMethod } from '@/lib/utils';

interface CanvasCallbackOptions {
  stageWidth: number;
  stageHeight: number;
  isCanvasDown: boolean;
}

type CtxEventHandler = (
  event: PointerEvent,
  ctx: CanvasRenderingContext2D,
  options: CanvasCallbackOptions,
) => void;

interface UseCanvasProps {
  initialOptions?: {
    unstabled_contextId?: '2d';
    stageRectMethod?: RectMethod;
    useRequestAnimationFrame?: boolean;
  };
  onCanvasReady?: (ctx: CanvasRenderingContext2D) => void;
  onCanvasObserver?: (
    ctx: CanvasRenderingContext2D,
    options: CanvasCallbackOptions,
  ) => void;
  onReuqestAnimationFrame?: (
    ctx: CanvasRenderingContext2D,
    options: CanvasCallbackOptions,
  ) => void;
  onWindowDown?: CtxEventHandler;
  onWindowMove?: CtxEventHandler;
  onWindowUp?: CtxEventHandler;
  onCanvasDown?: CtxEventHandler;
  onCanvasMove?: CtxEventHandler;
  onCanvasUp?: CtxEventHandler;
}

const useCanvas = (props: UseCanvasProps) => {
  /** initial options */
  const {
    initialOptions = {},
    onCanvasReady = () => {},
    onCanvasObserver = () => {},
    onReuqestAnimationFrame = () => {},
    onWindowDown = () => {},
    onWindowMove = () => {},
    onWindowUp = () => {},
    onCanvasDown = () => {},
    onCanvasMove = () => {},
    onCanvasUp = () => {},
  } = props ?? {};

  const {
    unstabled_contextId = '2d',
    stageRectMethod = 'client',
    useRequestAnimationFrame = false,
  } = initialOptions ?? {};

  const { isBrowser } = useSsr();
  /** ref elements */
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isCanvasDownRef = useRef<boolean>(false);

  const pixelRatioRef = useRef(1);
  const canvasStageRef = useRef({
    width: 0,
    height: 0,
  });

  const requetAnimationRef = useRef<number | null>(null);

  const { registerObserver } = useResizeObserver({
    onResizeObserver: rect => {
      // preset
      canvasStageRef.current = rect;

      // set
      canvasResize();

      if (!ctxRef.current) return;
      onCanvasObserver(ctxRef.current, callbackOptions());
    },
  });

  const registerCanvas = (canvasElement: HTMLCanvasElement) => {
    canvasRef.current = canvasElement as HTMLCanvasElement;
  };
  const registerCanvasContainer = (containerElement: HTMLElement | null) => {
    containerRef.current = containerElement;
  };

  useConditionEffect(
    () => {
      initCanvas();
      if (ctxRef.current) {
        onCanvasReady(ctxRef.current);
        useRequestAnimationFrame && canvasRequestAnimationFrame();
      }
      return () => {
        useRequestAnimationFrame &&
          requetAnimationRef.current &&
          window.cancelAnimationFrame(requetAnimationRef.current);
      };
    },
    [],
    {
      componentDidUpdateCondition: false,
    },
  );

  const initCanvas = () => {
    canvasInstall();
  };

  const canvasInstall = () => {
    if (!containerRef.current) {
      throw new Error('??????????????? ??????????????????. registerCanvasContainer');
    }
    if (!canvasRef.current) {
      throw new Error('???????????? ??????????????????. registerCanvas');
    }

    canvasStageRef.current = domController.getRectWithMethod(
      containerRef.current as HTMLElement,
      stageRectMethod,
    );
    registerObserver(containerRef.current as HTMLElement);

    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    pixelRatioRef.current = pixelRatio;

    const getContext = canvasRef.current.getContext(unstabled_contextId);
    if (!getContext) return;
    ctxRef.current = getContext as CanvasRenderingContext2D;
  };

  const canvasResize = () => {
    if (!canvasRef.current || !ctxRef.current) return;
    canvasRef.current.width =
      canvasStageRef.current.width * pixelRatioRef.current;
    canvasRef.current.height =
      canvasStageRef.current.height * pixelRatioRef.current;

    canvasRef.current.style.width = `${canvasStageRef.current.width}px`;
    canvasRef.current.style.height = `${canvasStageRef.current.height}px`;
    ctxRef.current.scale(pixelRatioRef.current, pixelRatioRef.current);
  };

  const canvasRequestAnimationFrame = () => {
    if (!isBrowser || !ctxRef.current) return;
    requetAnimationRef.current = window.requestAnimationFrame(
      canvasRequestAnimationFrame,
    );
    onReuqestAnimationFrame(ctxRef.current, callbackOptions());
  };

  useEventListener('pointerdown', event => {
    if (ctxRef.current) onWindowDown(event, ctxRef.current, callbackOptions());
  });
  useEventListener('pointermove', event => {
    if (ctxRef.current) onWindowMove(event, ctxRef.current, callbackOptions());
  });
  useEventListener('pointerup', event => {
    isCanvasDownRef.current = false;
    if (ctxRef.current) onWindowUp(event, ctxRef.current, callbackOptions());
  });

  useEventListener(
    'pointerdown',
    event => {
      isCanvasDownRef.current = true;
      if (ctxRef.current)
        onCanvasDown(event, ctxRef.current, callbackOptions());
    },
    canvasRef,
  );
  useEventListener(
    'pointermove',
    event => {
      if (ctxRef.current)
        onCanvasMove(event, ctxRef.current, callbackOptions());
    },
    canvasRef,
  );
  useEventListener(
    'pointerup',
    event => {
      isCanvasDownRef.current = false;
      if (ctxRef.current) onCanvasUp(event, ctxRef.current, callbackOptions());
    },
    canvasRef,
  );

  const callbackOptions = () => {
    return {
      stageWidth: canvasStageRef.current.width,
      stageHeight: canvasStageRef.current.height,
      isCanvasDown: isCanvasDownRef.current,
    };
  };

  return {
    registerCanvas,
    registerCanvasContainer,
    canvasRef,
    ctxRef,
    canvasStageRef,
  };
};

export { useCanvas };
