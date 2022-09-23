import { Ref, useRef, useEffect, useCallback, useState } from 'react';

type TriggerType = 'current' | 'before' | 'after';
interface ScrollFunctionProps {
  trigger: TriggerType;
  start: number;
  percent: number;
  offsetTop: number;
  offsetHeight: number;
}

interface UseScrollFunctions {
  onTrigger?: (props: ScrollFunctionProps) => void;
}

interface UseScrollTriggerProps extends UseScrollFunctions {
  threshold?: number;
  endAdvance?: number;
}

interface UserScrollTriggerReturn {
  trigger: TriggerType;
  percent: number;
  triggerTarget: Ref<HTMLElement>;
  registerTriggerTarget(el: HTMLElement): void;
}

export function useScrollTrigger(
  scrollTriggerProps?: UseScrollTriggerProps,
): UserScrollTriggerReturn {
  const { threshold = 0, endAdvance = 0, onTrigger } = scrollTriggerProps ?? {};
  const triggerTarget = useRef<HTMLElement | null>(null);
  const registerTriggerTarget = useCallback((el: HTMLElement) => {
    triggerTarget.current = el;
  }, []);

  const [trigger, setTrigger] = useState<TriggerType>('before');
  const [percent, setPercent] = useState(0);

  // const debuggerTopRef = useRef(document.createElement('div'));

  const handleScroll = () => {
    if (!triggerTarget.current) return;

    const innerHeight = window.innerHeight;
    const heightThresold = (innerHeight * threshold) / 100;
    const heightEndAdvance = (innerHeight * endAdvance) / 100;

    const sclY = window.scrollY;
    const offsetTop = triggerTarget.current.offsetTop;
    const offsetHeight = triggerTarget.current.offsetHeight;

    const triggerStart = sclY - offsetTop + heightThresold;
    const triggerTop = offsetTop + heightThresold;
    const triggerBottom =
      offsetTop + offsetHeight + heightThresold + heightEndAdvance;

    const triggerPercent =
      ((triggerStart ?? 1) / (triggerBottom - triggerTop)) * 100;

    let tempTrigger: TriggerType = 'before';

    if (triggerStart >= 0 && triggerPercent <= 100) {
      tempTrigger = 'current';
    } else if (triggerStart < 0) {
      tempTrigger = 'before';
    } else if (triggerPercent > 100) {
      tempTrigger = 'after';
    }
    // console.log('tempTrigger: ', tempTrigger);
    setTrigger(prev => (prev !== tempTrigger ? tempTrigger : prev));

    setPercent(prev => (prev !== triggerPercent ? triggerPercent : prev));
    if (typeof onTrigger === 'function') {
      onTrigger({
        trigger: tempTrigger,
        start: triggerStart,
        percent: parseFloat(triggerPercent.toFixed(3)),
        offsetTop: offsetTop,
        offsetHeight: offsetHeight,
      });
    }
  };

  useEffect(() => {
    if (!triggerTarget.current) return;
    handleScroll();

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [triggerTarget]);

  return {
    percent,
    trigger,
    triggerTarget,
    registerTriggerTarget,
  };
}
