import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useConditionEffect, usePathAnimation } from '@/lib/hooks';

import {
  InteractionHangeulHeadLine,
  InteractionHangeulController,
} from '../moecules';
import { HANGEUL } from '@/lib/constants';

interface ResumeHead {}

const SContainer = styled.section(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0 40px',
    minHeight: `calc(100vh - 74px)`,
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    padding: '0 20px',
    [theme.breakpoints.down('lg')]: {
      display: 'block',
      minHeight: `calc(100vh - 58px)`,
      paddingBottom: `calc(${theme.typography.h2.lineHeight} * 1.5)`,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      minHeight: `calc(100vh - 58px)`,
      paddingBottom: `calc(${theme.typography.h3.lineHeight} * 1.5)`,
    },
  };
});

const SHeadLineWrapper = styled.div(({ theme }) => {
  return {
    position: 'relative',
    zIndex: 1,
    transform: 'translateY(-100px)',
    [theme.breakpoints.down('lg')]: {
      transform: 'none',
      paddingTop: 40,
    },
  };
});
const SHeadLineTitle = styled.h2(({ theme }) => {
  return {
    wordBreak: 'keep-all',
    color: theme.palette.text.primary,
    ...theme.typography.h1,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h3,
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
  };
});
const SHeadLineSubTitle = styled.h3(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.subtitle1,
    marginTop: theme.typography.pxToRem(26),
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.subtitle2,
      marginTop: theme.typography.pxToRem(12),
    },
  };
});
const SControllerWrapper = styled.div(({ theme }) => {
  return {
    marginTop: theme.typography.pxToRem(12),
  };
});
const SHighlight = styled.span(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeight.Bold,
  };
});
const SSmBr = styled.br(({ theme }) => {
  return {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  };
});

const SHangeulWrapper = styled.div(({ theme }) => {
  return {
    width: '100%',
    maxWidth: 500,
    margin: '0 auto',
    padding: '0 40px',
    [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      left: '50%',
      bottom: '0',
      transform: 'translate(-50%, -20%)',
      opacity: 0.18,
    },
  };
});

type HangeulArrayType = Array<keyof typeof HANGEUL>;

export function Headline({}: ResumeHead) {
  const theme = useTheme();

  const [hangeulArray] = useState<HangeulArrayType>(
    Object.keys(HANGEUL) as HangeulArrayType,
  );
  const [hangeulIndex, setHangeulIndex] = useState(0);
  const { svgElRef, pathStatusRef, registerSVG, pathUtils } = usePathAnimation({
    options: {
      initDraw: false,
    },
    onPathTransitionEnd: ({ type }) => {
      if (type === 'draw') {
        erasePath();
      } else if (type === 'erase') {
        hangeulIndexNext();
      }
    },
  });
  function erasePath() {
    pathUtils.eraseAll({
      transition: [
        {
          property: 'stroke-width',
          duration: '600ms',
          timing: 'ease-out',
          delay: '60ms',
        },
        {
          property: 'stroke-dashoffset',
          duration: '700ms',
          timing: 'ease',
          delay: '0ms',
        },
        {
          property: 'opacity',
          duration: '110ms',
          timing: 'ease',
          delay: '590ms',
        },
      ],
      strokeWidth: 9,
    });
  }
  function drawPath() {
    pathUtils.setWidth({ transition: [], strokeWidth: 9 });
    pathUtils.drawAll({
      strokeWidth: 16,
      transition: [
        {
          property: 'stroke-width',
          duration: '880ms',
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
          duration: '160ms',
          timing: 'ease',
          delay: '0ms',
        },
      ],
    });
  }

  const hangeulIndexPrev = () =>
    setHangeulIndex(prev => (prev !== 0 ? prev - 1 : hangeulArray.length - 1));
  const hangeulIndexNext = () =>
    setHangeulIndex(prev => (prev !== hangeulArray.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    if (svgElRef.current) {
      svgElRef.current.style.visibility = 'visible';
    }
    if (pathStatusRef.current.type === '') {
      erasePath();
    }
    drawPath();
  }, [hangeulIndex, theme.palette.primary.main, theme.palette.shadow.hangeul]);

  return (
    <SContainer>
      <SHeadLineWrapper>
        <SHeadLineTitle>
          방문해주셔서
          <SSmBr /> 감사합니다!
          <br />
          프론트엔드 <SSmBr />
          개발자
          <SSmBr />
          <SHighlight> 지기역</SHighlight>입니다.
        </SHeadLineTitle>
        <SHeadLineSubTitle>
          ㄱ부터 ㅎ까지
          <SSmBr /> 저의 이름처럼
          <SSmBr /> 단계적으로
          <SSmBr /> 나아갑니다.
        </SHeadLineSubTitle>
        <SControllerWrapper>
          <InteractionHangeulController
            onClickPrev={hangeulIndexPrev}
            onClickNext={hangeulIndexNext}
          />
        </SControllerWrapper>
      </SHeadLineWrapper>
      <SHangeulWrapper>
        <InteractionHangeulHeadLine
          variant={hangeulArray[hangeulIndex]}
          registerSVG={registerSVG}
          stroke={theme.palette.primary.main}
          dropShadow={theme.palette.shadow.hangeul}
        />
      </SHangeulWrapper>
    </SContainer>
  );
}
