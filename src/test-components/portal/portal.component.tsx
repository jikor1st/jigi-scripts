import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// constants
import { INITIAL_PORTAL_ID } from '@/core/constants';

interface PortalProps {
  children: React.ReactNode;
  portalKey?: string;
}

const Portal = ({ children, portalKey = INITIAL_PORTAL_ID }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (container !== null) return;

    const targetContainer = document.getElementById(portalKey);
    setContainer(targetContainer);
  }, [container]);

  return container && createPortal(children, container as Element);
};
export { Portal };
