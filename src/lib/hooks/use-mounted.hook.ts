import React, { useEffect, useState } from 'react';

const useMounted = (): boolean => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return isMount;
};

export { useMounted };
