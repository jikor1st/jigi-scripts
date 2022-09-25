import { useEffect, useRef, ReactNode, forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { useSsr } from '@/lib/hooks';

import { portalSelector } from './utils';

interface PortalProps {
  children?: ReactNode;
}

export const PortalProvider = forwardRef<HTMLDivElement, PortalProps>(
  ({ children }, rootRef) => {
    const { isBrowser } = useSsr();
    const el = useRef<HTMLDivElement>(document.createElement('div'));

    useEffect(() => {
      const current = el.current;
      if (!isBrowser || !current) return;
      rootRef = el;

      const portalRoot = portalSelector.getDOM() as HTMLElement;
      portalRoot!.appendChild(current);

      return () => {
        rootRef = null;
        void portalRoot!.removeChild(current);
      };
    }, [isBrowser]);

    return el.current ? createPortal(children, el.current) : <></>;
  },
);
PortalProvider.displayName = 'PortalProvider';
