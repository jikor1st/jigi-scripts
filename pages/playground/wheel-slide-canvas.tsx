import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

// hooks
import { useCanvas, useConditionEffect } from '@/lib/hooks';

// modules
import { Rect, WheelSliderCanvas } from '@/lib/module';
import { utility } from '@/lib/utils';

const CardList = Array(30)
  .fill({ id: 0, fillStyle: '' })
  .map((_, idx) => ({ id: idx, fillStyle: utility.getRandomColor() }));

const WheelSlideCardsPage = () => {
  const pointRef = useRef({
    down: {
      x: 0,
      y: 0,
    },
    move: {
      x: 0,
      y: 0,
    },
  });

  const wheelRef = useRef<WheelSliderCanvas>(new WheelSliderCanvas(CardList));

  const { registerCanvasContainer, registerCanvas } = useCanvas({
    initialOptions: {
      stageRectMethod: 'offset',
      useRequestAnimationFrame: true,
    },
    onCanvasReady: () => {},
    onCanvasObserver: (ctx, { stageWidth, stageHeight }) => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);
      wheelRef.current.animate(ctx, {
        stageWidth: stageWidth,
        stageHeight: stageHeight,
        moveX: pointRef.current.move.x,
        pointY: pointRef.current.move.y,
      });
    },
    onReuqestAnimationFrame: (ctx, { stageWidth, stageHeight }) => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);

      pointRef.current.move.x *= 0.92;
      wheelRef.current.animate(ctx, {
        stageWidth: stageWidth,
        stageHeight: stageHeight,
        moveX: pointRef.current.move.x,
        pointY: pointRef.current.down.y,
      });
    },
    onWindowDown: () => {},
    onWindowMove: () => {},
    onWindowUp: () => {},
    onCanvasDown: (event, ctx, options) => {
      const { offsetX, offsetY } = event;

      pointRef.current.move.x = 0;
      pointRef.current.move.y = 0;

      pointRef.current.down.x = offsetX;
      pointRef.current.down.y = offsetY;
    },
    onCanvasMove: (event, ctx, options) => {
      const { isCanvasDown, stageWidth, stageHeight } = options;
      if (!isCanvasDown) return;
      const { offsetX, offsetY } = event;
      pointRef.current.move.x = offsetX - pointRef.current.down.x;

      pointRef.current.down.x = offsetX;
      pointRef.current.down.y = offsetY;
    },
    onCanvasUp: () => {},
  });

  // useConditionEffect(() => {

  // }, [], {
  //   componentDidUpdateCondition: false,
  // });

  return (
    <Container>
      <CanvasContainer ref={registerCanvasContainer}>
        <Canvas ref={registerCanvas} />
      </CanvasContainer>
    </Container>
  );
};

const Container = styled.div(() => {
  return {
    display: 'flex',
    flex: '1 1 auto',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };
});

const CanvasContainer = styled.div(() => {
  return {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    inset: 0,
    fontSize: 0,
  };
});

const Canvas = styled.canvas(() => {
  return {
    width: '100%',
    height: '100%',
    touchAction: 'none',
  };
});

export default WheelSlideCardsPage;
