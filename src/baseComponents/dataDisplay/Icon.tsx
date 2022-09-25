import { createElement, memo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { ICONS } from '@/lib/constants';

const ICON_SIZE = {
  large: 48,
  medium: 32,
  small: 24,
};

type ColorThemeKey = 'primary' | 'secondary' | 'error' | 'success';
export interface IconBaseProps {
  icon: keyof typeof ICONS;
  variant?: 'default' | 'filled' | 'outlined';
  color?: ColorThemeKey | string;
  size?: 'large' | 'medium' | 'small' | number;
}

const IconBox = styled.span<{
  iconSize: number;
  bgFill: string;
  bgOutline: string;
}>(({ theme, bgFill, bgOutline, iconSize }) => {
  const remIconSize = theme.typography.pxToRem(iconSize);
  return {
    fontSize: 0,
    display: 'inline-block',
    borderRadius: '50%',
    backgroundColor: bgFill,
    border: `1px solid ${bgOutline}`,
    width: remIconSize,
    height: remIconSize,
  };
});

export const Icon: React.FC<IconBaseProps> = memo(
  ({ icon, variant = 'default', color = 'secondary', size = 'medium' }) => {
    const theme = useTheme();

    let iconFill = 'transparent';
    let bgFill = 'transparent';
    let bgOutline = 'transparent';

    const colorThemeKey: ColorThemeKey[] = [
      'primary',
      'secondary',
      'error',
      'success',
    ];

    if (colorThemeKey.some(item => item === color)) {
      switch (variant) {
        case 'filled':
          iconFill = theme.palette[color as ColorThemeKey].contrast;
          bgFill = theme.palette[color as ColorThemeKey].main;
          break;
        case 'outlined':
          iconFill = theme.palette[color as ColorThemeKey].main;
          bgOutline = theme.palette[color as ColorThemeKey].main;
          break;
        default:
          iconFill = theme.palette[color as ColorThemeKey].main;
          break;
      }
    } else {
      switch (variant) {
        case 'filled':
          iconFill = color;
          bgFill = color;
          break;
        case 'outlined':
          iconFill = color;
          bgOutline = color;
          break;
        default:
          iconFill = color;
          break;
      }
    }

    const iconSize = typeof size !== 'number' ? ICON_SIZE[size] : size;
    const remIconSize = theme.typography.pxToRem(iconSize ?? 16);
    return (
      <IconBox iconSize={iconSize} bgFill={bgFill} bgOutline={bgOutline}>
        {createElement(ICONS[icon], {
          width: remIconSize,
          height: remIconSize,
          fill: iconFill,
        })}
      </IconBox>
    );
  },
);
Icon.displayName = 'Icon';
