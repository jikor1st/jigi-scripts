import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { SectionWrapper, SectionTitle, InfoText, HangeulPath } from '../atoms';
import { v4 } from 'uuid';

import { RESUME, HANGEUL } from '@/lib/constants';

import {
  usePathAnimation,
  useIntersectionObserver,
  useScrollTrigger,
} from '@/lib/hooks';

interface HangeulPathLineProps {
  variant: keyof typeof HANGEUL;
  percent: number;
}

type HangeulArrayType = Array<keyof typeof HANGEUL>;

const HangeulPathLine = ({ variant, percent }: HangeulPathLineProps) => {
  const theme = useTheme();

  const { registerSVG, pathUtils } = usePathAnimation({});

  useEffect(() => {
    pathUtils.line({ percent: percent });
  }, [percent]);
  return (
    <li>
      <HangeulPath
        variant={variant}
        strokeWidth={16}
        stroke={theme.palette.secondary.light}
        registerSVG={registerSVG}
      />
    </li>
  );
};

const SIntroduceContainer = styled.div(() => {
  return {
    maxWidth: 600,
  };
});

const SInteractionHangeulContainer = styled.ul(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    alignItems: 'start',
    maxWidth: 600,
    gap: 44,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
  };
});

// 자기소개
export function Introduction() {
  const theme = useTheme();

  const [hangeulArray] = useState<HangeulArrayType>(
    Object.keys(HANGEUL) as HangeulArrayType,
  );

  const { trigger, percent, registerTriggerTarget } = useScrollTrigger({
    threshold: 90,
    endAdvance: 20,
  });

  return (
    <SectionWrapper
      id={RESUME.introduce.header.id}
      sx={{
        display: {
          sm: 'block',
          lg: 'flex',
        },
        gap: 160,
        marginTop: {
          sm: `-${theme.typography.h3.lineHeight}`,
          lg: `-${theme.typography.h2.lineHeight}`,
        },
      }}
    >
      <SIntroduceContainer>
        <SectionTitle
          sx={{
            marginBottom: {
              sm: 24,
              lg: 56,
            },
          }}
        >
          저는요!
        </SectionTitle>
        <div ref={el => registerTriggerTarget(el as HTMLElement)}>
          {RESUME.introduce.category.map(({ text }, index, arr) => {
            const marginBottom = index !== arr.length - 1 ? 44 : undefined;
            return (
              <InfoText
                sx={{ marginBottom: marginBottom }}
                key={`introduce-${v4()}`}
              >
                {text}
              </InfoText>
            );
          })}
        </div>
      </SIntroduceContainer>
      <SInteractionHangeulContainer>
        {hangeulArray.map((variant, index) => {
          const itemPercent =
            trigger === 'current' ? percent : trigger === 'before' ? 0 : 100;
          return (
            <HangeulPathLine
              variant={variant}
              percent={itemPercent}
              key={variant}
            />
          );
        })}
      </SInteractionHangeulContainer>
    </SectionWrapper>
  );
}
