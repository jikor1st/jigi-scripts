import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { usePathAnimation } from '@/lib/hooks';

import { HangeulPath } from '../atoms';
import { InteractionHangeulController } from '../moecules';
import { HANGEUL } from '@/lib/constants';

interface ResumeHead {}

const SContainer = styled.section(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0 36px',
    minHeight: `calc(100vh - 74px)`,
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    padding: '0 20px',
    paddingBottom: theme.typography.h2.lineHeight,
    [theme.breakpoints.down('lg')]: {
      display: 'block',
      minHeight: `calc(100vh - 58px)`,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      minHeight: `calc(100vh - 58px)`,
      paddingBottom: `calc(${theme.typography.h3.lineHeight} * 1.5)`,
    },
    [`@media ${
      theme.breakpoints.down('lg').split('@media')[1]
    } and (min-height:920px)`]: {
      minHeight: 'unset',
    },
  };
});

const SHeadLineWrapper = styled.div(({ theme }) => {
  return {
    position: 'relative',
    zIndex: 1,
    paddingBottom: 40,
    [theme.breakpoints.down('lg')]: {
      transform: 'none',
      paddingTop: 40,
    },
  };
});
const SHeadLineTitle = styled.h2(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h1,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h3,
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
  };
});
const SHeadLineSubTitle = styled.h3(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
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
const SXlBr = styled.br(({ theme }) => {
  return {
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  };
});
const SLgBr = styled.br(({ theme }) => {
  return {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
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
      top: '40%',
      transform: 'translate(-50%, -50%)',
      opacity: 0.14,
      filter: 'grayscale(0.75)',
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
  const hangeulElRef = useRef<SVGSVGElement | null>(null);
  const { pathUtils } = usePathAnimation(hangeulElRef, {
    options: {},
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
          duration: '650ms',
          timing: 'ease-out',
          delay: '100ms',
        },
        {
          property: 'stroke-dashoffset',
          duration: '800ms',
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
      strokeWidth: 8,
    });
  }
  function drawPath() {
    pathUtils.setWidth({ transition: [], strokeWidth: 8 });
    pathUtils.drawAll({
      strokeWidth: 16,
      transition: [
        {
          property: 'stroke-width',
          duration: '300ms',
          timing: 'ease',
          delay: '0ms',
        },
        {
          property: 'stroke-dashoffset',
          duration: '1200ms',
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
    drawPath();
  }, [hangeulIndex, theme.palette.primary.main, theme.palette.shadow.hangeul]);

  return (
    <SContainer>
      <SHeadLineWrapper>
        <SHeadLineTitle>
          방문해 주셔서
          <SXlBr /> 감사합니다!
          <br />
          프론트엔드 <SSmBr />
          개발자
          <SXlBr />
          <SHighlight> 지기역</SHighlight>입니다.
        </SHeadLineTitle>
        <SHeadLineSubTitle>
          저의 이름처럼
          <SSmBr /> ㄱ부터 ㅎ까지
          <SLgBr /> 단계적으로
          <SSmBr /> 나아갑니다.
        </SHeadLineSubTitle>
        <SControllerWrapper>
          <InteractionHangeulController
            current={hangeulArray[hangeulIndex]}
            onClickPrev={hangeulIndexPrev}
            onClickNext={hangeulIndexNext}
          />
        </SControllerWrapper>
      </SHeadLineWrapper>
      <SHangeulWrapper>
        <HangeulPath
          variant={hangeulArray[hangeulIndex]}
          strokeWidth={8}
          stroke={theme.palette.primary.main}
          ref={hangeulElRef}
        />
      </SHangeulWrapper>
    </SContainer>
  );
}
