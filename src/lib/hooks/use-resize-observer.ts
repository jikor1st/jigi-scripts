import { useRef, useState, useEffect } from 'react';
import PolyfillResizeObserver from 'resize-observer-polyfill';

import { useMounted, useConditionEffect } from '@/lib/hooks';

interface userResizeObserverProps {
  onResizeObserver?: (rect: { width: number; height: number }) => void;
}
const useResizeObserver = ({
  onResizeObserver,
}: userResizeObserverProps = {}) => {
  const observerRef = useRef<ResizeObserver | null>(null);
  const targetElementRef = useRef<HTMLElement | null>(null);

  const registerObserver = (element: HTMLElement) => {
    if (!observerRef.current) return;
    targetElementRef.current = element;
    observerRef.current.observe(element);
  };

  const unRegisterObserver = (element: HTMLElement) => {
    if (!observerRef.current) return;
    observerRef.current.unobserve(element);
    observerRef.current.disconnect();
  };

  const installResizeObserver = (entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      const { inlineSize, blockSize } = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : (entry.contentBoxSize as ResizeObserverSize[]);
      if (typeof onResizeObserver === 'function') {
        onResizeObserver({
          width: inlineSize,
          height: blockSize,
        });
      }
    }
  };

  useConditionEffect(
    () => {
      observerRef.current = window.ResizeObserver
        ? new ResizeObserver(installResizeObserver)
        : new PolyfillResizeObserver(installResizeObserver);

      return () => {
        if (!observerRef.current || !targetElementRef.current) return;
        unRegisterObserver(targetElementRef.current);
      };
    },
    [],
    { componentDidUpdateCondition: false },
  );
  return {
    registerObserver,
    unRegisterObserver,
  };
};

export { useResizeObserver };
