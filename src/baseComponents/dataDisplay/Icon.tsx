import { createElement, memo } from 'react';
import styled, { useTheme } from 'styled-components';

import { ICONS } from '@/lib/constants';

const ICON_SIZE = {
  large: 48,
  medium: 32,
  small: 24,
};

export interface IconBaseProps {
  icon: keyof typeof ICONS;
  variant?: 'default' | 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'error' | 'success';
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
