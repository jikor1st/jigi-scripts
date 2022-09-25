import { useEffect, useRef } from 'react';
import PolyfillResizeObserver from 'resize-observer-polyfill';

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
      const { width, height } = entry.contentRect;
      if (typeof onResizeObserver === 'function') {
        onResizeObserver({
          width: width,
          height: height,
        });
      }
    }
  };

  useEffect(() => {
    observerRef.current = new PolyfillResizeObserver(installResizeObserver);

    return () => {
      if (!observerRef.current || !targetElementRef.current) return;
      unRegisterObserver(targetElementRef.current);
    };
  }, []);
  return {
    registerObserver,
    unRegisterObserver,
  };
};

export { useResizeObserver };
