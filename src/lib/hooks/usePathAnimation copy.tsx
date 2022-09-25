import { MutableRefObject, useEffect, useRef } from 'react';

interface Transition {
  property: string;
  duration?: `${number}ms`;
  timing?: string;
  delay?: `${number}ms`;
}

type PathTransition = Transition[];

interface PathPropsOptions {
  broadcast?: boolean;
  transition?: PathTransition;
  strokeWidth?: number;
}

interface PathSetWidthProps extends PathPropsOptions {}
interface PathEraseAllProps extends PathPropsOptions {}
interface PathDrawAllProps extends PathPropsOptions {}
interface PathLineProps extends PathPropsOptions {
  percent: number;
}

type PathType = 'erase' | 'draw' | 'width' | '';

interface PathStatus {
  type: PathType;
  broadcast: boolean;
  toggle: 'play' | 'stop';
}

interface PathUtils {
  setWidth(props?: PathSetWidthProps): void;
  eraseAll(props?: PathEraseAllProps): void;
  drawAll(props?: PathDrawAllProps): void;
  line(props?: PathLineProps): void;
}

export interface UsePathAnimationReturn {
  svgElRef: MutableRefObject<SVGSVGElement | null>;
  registerSVG(svgEl: SVGSVGElement): void;
  pathUtils: PathUtils;
  pathStatusRef: MutableRefObject<PathStatus>;
  toggleTransition: () => void;
}

interface PathAnimaFunctions {
  onPrepareSVG?(): () => void;
  onPathTransitionEnd?: (props: { type: PathType }) => void;
  onPathDrawAllEnd?: () => void;
  onPathEraseAllEnd?: () => void;
  onPathSetWidthEnd?: () => void;
}

interface UsePathOptions {
  initDraw?: boolean;
}

interface UsePathAnimationProps extends PathAnimaFunctions {
  options?: UsePathOptions;
}

const DEFAULT = {
  transition: [
    {
      property: 'stroke-width',
      duration: '660ms',
      timing: 'ease',
      delay: '0ms',
    },
    {
      property: 'stroke-dashoffset',
      duration: '880ms',
      timing: 'ease',
      delay: '0ms',
    },
    {
      property: 'opacity',
      duration: '20ms',
      timing: 'ease',
      delay: '0ms',
    },
  ] as PathTransition,
  stroke: {
    width: 16,
  },
};

const transitionUtils = {
  generator(transitionArray: Transition[]) {
    let result = '';
    transitionArray.map(
      (
        { property, duration = '0ms', timing = 'linear', delay = '0ms' },
        index,
      ) => {
        result += `${property} ${duration} ${timing} ${delay}`;
        if (
          index !== transitionArray.length - 1 &&
          transitionArray.length > 1
        ) {
          result += ',';
        }
      },
    );
    return result;
  },
  convertMsToNum(ms: `${number}ms`): number {
    return parseInt(ms.split('ms')[0], 10) ?? 0;
  },
  bigDuration(transitionArray: Transition[]) {
    let tempDuration = 0;
    let tempDelay = 0;
    transitionArray.forEach(({ duration, delay }) => {
      const durationNum = this.convertMsToNum(duration ?? '0ms');
      const delayNum = this.convertMsToNum(delay ?? '0ms');
      if (durationNum > tempDuration) {
        tempDuration = durationNum;
      }
      if (delayNum > tempDelay) {
        tempDelay = durationNum;
      }
    });
    return tempDuration + tempDelay;
  },
};

export function usePathAnimation({
  options,
  onPrepareSVG,
  onPathTransitionEnd,
  onPathEraseAllEnd,
  onPathDrawAllEnd,
  onPathSetWidthEnd,
}: UsePathAnimationProps): UsePathAnimationReturn {
  const { initDraw = true } = options ?? {};

  const svgElRef = useRef<SVGSVGElement | null>(null);
  const registerSVG = (svg: SVGSVGElement) => {
    svgElRef.current = svg as SVGSVGElement;
  };
  const pathElsRef = useRef<SVGPathElement[] | null>(null);

  const pathStatusRef = useRef<PathStatus>({
    type: '',
    broadcast: true,
    toggle: 'play',
  });

  const pathTransitionTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const prepareSVG = (svg?: SVGSVGElement | null) => {
    if (!svg) return;
    // setting initial settings
    if (!initDraw) {
      pathUtils.eraseAll({ transition: [], broadcast: false });
    } else {
      pathUtils.drawAll({ transition: [], broadcast: false });
    }

    // prepare view
    svg.style.visibility = 'visible';

    if (typeof onPrepareSVG === 'function') {
      onPrepareSVG();
    }
  };

  const timerReset = (timerId: ReturnType<typeof setTimeout> | null) =>
    timerId && clearTimeout(timerId);
  const toggleTransition = () => {
    timerReset(pathTransitionTimerRef.current);
  };

  const getAllPaths = (svg: SVGSVGElement) => [
    ...Array.from(svg.querySelectorAll('path')),
    ...Array.from(svg.querySelectorAll('line')),
  ];

  const pathUtils: PathUtils = {
    setWidth(pathProps) {
      if (!svgElRef.current) return;
      svgElRef.current.style.visibility = 'visible';
      if (pathStatusRef.current.type === 'width') return;

      const {
        transition: tempTransition,
        strokeWidth: tempStrokeWidth,
        broadcast = true,
      } = pathProps ?? {};

      pathStatusRef.current.type = 'width';
      pathStatusRef.current.broadcast = broadcast;

      const transition = tempTransition ?? DEFAULT.transition;
      const strokeWidth = tempStrokeWidth ?? DEFAULT.stroke.width;

      const pathEls = getAllPaths(svgElRef.current);
      pathEls.forEach(pathEl => {
        pathEl.style.transition = transitionUtils.generator(transition);
        pathEl.style.strokeWidth = strokeWidth.toString();
      });

      const bigDuration = transitionUtils.bigDuration(transition);
      handleTransitionEnd(bigDuration);
    },
    eraseAll(pathProps) {
      if (!svgElRef.current) return;
      if (pathStatusRef.current.type === 'erase') return;

      const pathEls = getAllPaths(svgElRef.current);
      const {
        transition: tempTransition,
        strokeWidth: tempStrokeWidth,
        broadcast = true,
      } = pathProps ?? {};

      const transition = tempTransition ?? DEFAULT.transition;
      const strokeWidth = tempStrokeWidth ?? DEFAULT.stroke.width;

      pathStatusRef.current.type = 'erase';
      pathStatusRef.current.broadcast = broadcast;

      pathEls.forEach(pathEl => {
        const pathLength = pathEl.getTotalLength();

        pathEl.style.transition = transitionUtils.generator(transition);

        pathEl.style.opacity = (0).toString();
        pathEl.style.strokeWidth = strokeWidth.toString();
        pathEl.style.strokeDasharray = pathLength.toString();
        pathEl.style.strokeDashoffset = pathLength.toString();
      });

      const bigDuration = transitionUtils.bigDuration(transition);
      handleTransitionEnd(bigDuration);
    },
    drawAll(pathProps) {
      if (!svgElRef.current) return;
      if (pathStatusRef.current.type === 'draw') return;

      const pathEls = getAllPaths(svgElRef.current);
      const {
        transition: tempTransition,
        strokeWidth: tempStrokeWidth,
        broadcast = true,
      } = pathProps ?? {};

      pathStatusRef.current.type = 'draw';
      pathStatusRef.current.broadcast = broadcast;

      const transition = tempTransition ?? DEFAULT.transition;
      const strokeWidth = tempStrokeWidth ?? DEFAULT.stroke.width;

      pathEls.forEach(pathEl => {
        const pathLength = pathEl.getTotalLength();

        pathEl.style.transition = transitionUtils.generator(transition);

        pathEl.style.opacity = (1).toString();

        pathEl.style.strokeWidth = strokeWidth.toString();
        pathEl.style.strokeDasharray = pathLength.toString();
        pathEl.style.strokeDashoffset = '0';
      });

      const bigDuration = transitionUtils.bigDuration(transition);
      handleTransitionEnd(bigDuration);
    },
    line(pathProps) {
      if (!svgElRef.current) return;
      const pathEls = getAllPaths(svgElRef.current);

      const { percent: tempPercent = 0, strokeWidth: tempStrokeWidth } =
        pathProps ?? {};

      const strokeWidth = tempStrokeWidth ?? DEFAULT.stroke.width;

      pathEls.forEach(pathEl => {
        const pathLength = pathEl.getTotalLength();
        const strokeDashOffset = pathLength - (pathLength * tempPercent) / 100;

        pathEl.style.opacity = (1).toString();
        pathEl.style.strokeWidth = strokeWidth.toString();
        pathEl.style.strokeDasharray = pathLength.toString();
        pathEl.style.strokeDashoffset = strokeDashOffset.toString();
      });
    },
  };

  const handleTransitionEnd = (duration: number) => {
    timerReset(pathTransitionTimerRef.current);
    if (!pathStatusRef.current.broadcast) return;

    const pathStatusType = pathStatusRef.current.type;
    pathTransitionTimerRef.current = setTimeout(() => {
      if (pathElsRef.current) {
        pathElsRef.current.map(pathEl => {
          pathEl.style.removeProperty('transition');
        });
      }

      if (pathStatusType === 'width') {
        if (typeof onPathSetWidthEnd === 'function') {
          onPathSetWidthEnd();
        }
      } else if (pathStatusType === 'erase') {
        if (typeof onPathEraseAllEnd === 'function') {
          onPathEraseAllEnd();
        }
      } else if (pathStatusType === 'draw') {
        if (typeof onPathDrawAllEnd === 'function') {
          onPathDrawAllEnd();
        }
      }

      if (typeof onPathTransitionEnd === 'function') {
        onPathTransitionEnd({ type: pathStatusType });
      }

      pathStatusRef.current.type = '';
    }, duration);
  };

  useEffect(() => {
    prepareSVG(svgElRef.current);
    return () => {
      timerReset(pathTransitionTimerRef.current);
    };
  }, [svgElRef.current]);

  return {
    svgElRef,
    registerSVG,
    pathUtils,
    pathStatusRef,
    toggleTransition,
  };
}
