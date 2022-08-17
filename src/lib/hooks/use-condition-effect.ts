import { useRef, useEffect } from 'react';
interface IUseConditionEffectOption {
  componentDidUpdateCondition?: boolean;
  componentDidMountCondition?: boolean;
}
const useConditionEffect = (
  effectFunction: () => void,
  deps: any[],
  option: IUseConditionEffectOption,
) => {
  const didMountRef = useRef(false);
  const {
    componentDidUpdateCondition = true,
    componentDidMountCondition = true,
  } = option;

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      if (componentDidMountCondition) {
        effectFunction();
      }

      return;
    }

    if (componentDidUpdateCondition) {
      effectFunction();
    }
  }, deps); //eslint-disable-line
};

export { useConditionEffect };
