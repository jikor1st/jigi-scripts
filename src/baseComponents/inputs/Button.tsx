import { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  maxWidth?: number;
  loading?: boolean;
}

export const Button = ({
  children,
  type = 'button',
  disabled,
  loading,
  onClick,
  ...buttonProps
}: ButtonProps) => {
  return (
    <SButton
      type={type}
      disabled={disabled || loading}
      onClick={event => {
        if (!disabled && typeof onClick === 'function') onClick(event);
      }}
      {...buttonProps}
    >
      <SContents>{children}</SContents>
    </SButton>
  );
};

const SButton = styled.button<ButtonProps>(({ theme, maxWidth }) => {
  const bgColor = theme.palette.primary.main;
  const activeBgColor = theme.palette.primary.dark;
  const disabledBgColor = theme.palette.actions.disabled;
  return {
    width: '100%',
    ...(maxWidth && { maxWidth: maxWidth }),
    minHeight: theme.typography.pxToRem(52),
    background: bgColor,
    border: `1px solid ${bgColor}`,
    color: theme.palette.primary.contrast,
    ...theme.typography.subtitle2,
    borderRadius: theme.typography.pxToRem(26),
    '&:active': {
      background: activeBgColor,
      borderColor: activeBgColor,
    },
    '&:disabled': {
      background: disabledBgColor,
      borderColor: disabledBgColor,
    },
  };
});

const SContents = styled.span(({ theme }) => {
  return {
    display: 'block',
    width: '100%',
    padding: `0 ${theme.typography.pxToRem(24)}`,
  };
});
