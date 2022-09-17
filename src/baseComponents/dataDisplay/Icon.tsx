import { createElement, memo } from 'react';
import styled from '@emotion/styled';

import { IMAGES } from '@/lib/constants';

import { useTheme } from '@emotion/react';

const ICON_SIZE = {
  large: 48,
  medium: 32,
  small: 24,
};

interface IconBaseProps {
  icon: keyof typeof IMAGES['icon'];
  variant?: 'default' | 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  size?: 'large' | 'medium' | 'small' | number;
}

const IconBox = styled.span<{
  iconSize: `${number}rem`;
  bgFill: string;
  bgOutline: string;
}>(({ bgFill, bgOutline, iconSize }) => {
  return {
    fontSize: 0,
    display: 'inline-block',
    borderRadius: '50%',
    backgroundColor: bgFill,
    border: `1px solid ${bgOutline}`,
    width: iconSize,
    height: iconSize,
  };
});

function pxToRem(px: number, htmlFontSize: number): `${number}rem` {
  return `${px / htmlFontSize}rem`;
}

export const Icon: React.FC<IconBaseProps> = memo(
  ({ icon, variant = 'default', color = 'secondary', size = 'medium' }) => {
    const theme = useTheme();

    let iconFill = 'none';
    let bgFill = 'none';
    let bgOutline = 'none';

    switch (variant) {
      case 'filled':
        iconFill = theme.palette[color].contrast;
        bgFill = theme.palette[color].main;
        break;
      case 'outlined':
        iconFill = theme.palette[color].main;
        bgOutline = theme.palette[color].main;
        break;
      default:
        iconFill = theme.palette[color].main;
        break;
    }

    const iconSize = typeof size !== 'number' ? ICON_SIZE[size] : size;
    const remIconSize = pxToRem(iconSize, theme.typography.htmlFontSize);
    return (
      <IconBox iconSize={remIconSize} bgFill={bgFill} bgOutline={bgOutline}>
        {createElement(IMAGES.icon[icon], {
          width: remIconSize,
          height: remIconSize,
          fill: iconFill,
        })}
      </IconBox>
    );
  },
);
Icon.displayName = 'Icon';
