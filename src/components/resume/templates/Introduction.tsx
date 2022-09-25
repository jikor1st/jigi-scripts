import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { SectionWrapper, SectionTitle, InfoText, HangeulPath } from '../atoms';
import { v4 } from 'uuid';

import { RESUME, HANGEUL } from '@/lib/constants';

import { usePathAnimation, useScrollTrigger } from '@/lib/hooks';

interface HangeulPathLineProps {
  variant: keyof typeof HANGEUL;
  percent: number;
}

type HangeulArrayType = Array<keyof typeof HANGEUL>;

const HangeulPathLine = ({ variant, percent }: HangeulPathLineProps) => {
  const theme = useTheme();

  const hangeulElRef = useRef<SVGSVGElement | null>(null);
  const { pathUtils } = usePathAnimation(hangeulElRef, {});

  useEffect(() => {
    pathUtils.line({ percent: percent });
  }, [percent]);

  return (
    <HangeulPath
      variant={variant}
      strokeWidth={16}
      stroke={theme.palette.secondary.light}
      ref={hangeulElRef}
    />
  );
};

const SIntroduceContainer = styled.div(() => {
  return {
    maxWidth: 560,
  };
});

const SInteractionHangeulContainer = styled.ul(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    alignItems: 'center',
    gridAutoRows: 'minmax(min-content, max-content)',
    gap: 44,
    [theme.breakpoints.down('lg')]: {
      visibility: 'hidden',
      opacity: 0,
      height: 0,
      width: 0,
    },
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
          lg: 'grid',
        },
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(min-content, max-content)',
        alignItems: 'center',
        gap: 160,
        marginTop: `-${theme.typography.h2.lineHeight}`,
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
        {hangeulArray.map(variant => {
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
