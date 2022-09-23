import { ReactNode } from 'react';
import styled from 'styled-components';

import { CSSWithBreakpoints } from '@/lib/theme';

const SBr = styled.br<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    ...theme.breakpoints.createStyle(sx),
  };
});

interface BRProps extends CSSWithBreakpoints {}

export function BR({ ...rest }: BRProps) {
  return <SBr {...rest} />;
}
