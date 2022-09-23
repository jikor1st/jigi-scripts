import { ReactNode, memo, forwardRef } from 'react';
import styled from 'styled-components';
import { PortalProvider } from '@/extendsComponents';

const Dimmed = styled.div(({ theme }) => {
  return {
    width: '100%',
    height: '100vh',
    background: theme.palette.actions.disabled,
  };
});

const Boundary = styled.div<{ nested: boolean }>(({ nested }) => {
  return {
    position: nested ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',

    zIndex: 10000,
  };
});

interface ModalProps {
  children?: ReactNode;
  dimmed?: boolean;
  nested?: boolean;
}

export const Modal = memo(
  forwardRef<HTMLDivElement, ModalProps>(
    ({ children, dimmed = false, nested = true }, rootRef) => {
      return (
        <PortalProvider ref={rootRef}>
          <Boundary nested={nested}>
            {!dimmed ? children : <Dimmed>{children}</Dimmed>}
          </Boundary>
        </PortalProvider>
      );
    },
  ),
);

Modal.displayName = 'Modal';
