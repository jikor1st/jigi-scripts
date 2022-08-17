import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

// hooks
import { useCanvas, useConditionEffect } from '@/lib/hooks';

// modules
import { Rect, WheelSlider } from '@/lib/module';

const CardList = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

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

  const wheelRef = useRef<WheelSlider>(new WheelSlider());

  const { registerCanvasContainer, registerCanvas } = useCanvas({
    initialOptions: {
      stageRectMethod: 'offset',
      useRequestAnimationFrame: true,
    },
    onCanvasReady: () => {},
    onCanvasObserver: (ctx, { stageWidth, stageHeight }) => {},
    onReuqestAnimationFrame: (ctx, { stageWidth, stageHeight }) => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);
      pointRef.current.move.x *= 0.92;
      wheelRef.current.install([], {
        ctx: ctx,
        stageWidth: stageWidth,
        stageHeight: stageHeight,
        moveX: pointRef.current.move.x,
      });
    },
    onWindowDown: () => {},
    onWindowMove: () => {},
    onWindowUp: () => {},
    onCanvasDown: (event, ctx, options) => {
      pointRef.current.move.x = 0;
      pointRef.current.down.x = event.offsetX;
    },
    onCanvasMove: (event, ctx, options) => {
      const { isCanvasDown } = options;
      if (!isCanvasDown) return;
      pointRef.current.move.x = event.offsetX - pointRef.current.down.x;
      pointRef.current.down.x = event.offsetX;
    },
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
  return {};
});

export default WheelSlideCardsPage;
