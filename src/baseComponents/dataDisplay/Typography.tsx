import { ReactNode } from 'react';

import styled from 'styled-components';

import type {
  TypefaceKey,
  PaletteState,
  PaletteBasic,
} from '@/lib/theme/themeType';

type PaletteText =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'text'
  | 'actions';

const STypography = styled.p<{
  variant: TypefaceKey;
  color: `${PaletteText}.${string}` | string;
}>(({ theme, variant, color }) => {
  let fontColor = '';

  const isPaletteKey = [
    'primary',
    'secondary',
    'error',
    'success',
    'actions',
    'text',
  ];

  if (
    isPaletteKey.some(item => item === color) ||
    color.split('.').length === 2
  ) {
    const [paletteKey, paletteValue] = color.split('.') as [
      PaletteText,
      string,
    ];
    if (
      paletteKey === 'primary' ||
      paletteKey === 'secondary' ||
      paletteKey === 'error' ||
      paletteKey === 'success'
    ) {
      const statusValue = paletteValue
        ? (paletteValue as unknown as keyof PaletteState)
        : 'main';
      fontColor = theme.palette[paletteKey][statusValue];
    } else if (paletteKey === 'actions') {
      const actionsValue = paletteValue
        ? (paletteValue as unknown as 'disabled' | 'hover')
        : 'disabled';
      fontColor = theme.palette[paletteKey][actionsValue];
    } else {
      const textValue = paletteValue
        ? (paletteValue as unknown as keyof PaletteBasic)
        : 'primary';
      fontColor = theme.palette[paletteKey][textValue];
    }
  } else {
    fontColor = color;
  }
  return {
    ...theme.typography[variant],
    color: fontColor,
  };
});

interface TypographyProps {
  children?: ReactNode;
  variant?: TypefaceKey;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?: `${PaletteText}.${string}` | string;
}

export const Typography = ({
  children,
  variant = 'body1',
  component = 'p',
  color = 'text',
}: TypographyProps) => {
  return (
    <STypography as={component} variant={variant} color={color}>
      {children}
    </STypography>
  );
};
