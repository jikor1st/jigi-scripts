import { memo } from 'react';

import styled from 'styled-components';
import { HangeulPath, HangeulPathProps } from '../atoms';

const SContainer = styled.div(() => {
  return {};
});

interface InteractionHangeulHeadLine
  extends Omit<HangeulPathProps, 'strokeWidth'> {}

export const InteractionHangeulHeadLine = memo(
  ({
    variant,
    stroke,
    dropShadow,
    registerSVG,
  }: InteractionHangeulHeadLine) => {
    return (
      <SContainer>
        <HangeulPath
          variant={variant}
          strokeWidth={16}
          stroke={stroke}
          dropShadow={dropShadow}
          registerSVG={registerSVG}
        />
      </SContainer>
    );
  },
);
