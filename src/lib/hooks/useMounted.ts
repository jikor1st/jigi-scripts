import { useEffect, useState } from 'react';

const useMounted = (): boolean => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);

    return () => setIsMount(false);
  }, []);

  return isMount;
};

export { useMounted };
