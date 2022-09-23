import { useEffect } from 'react';
// See: https://usehooks-ts.com/react-hook/use-local-storage
import { useLocalStorage, useMediaQuery, useUpdateEffect } from '@/lib/hooks';
// See: https://usehooks-ts.com/react-hook/use-update-effect

// presets
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
const DARK_MODE_KEY = 'isDarkMode';

export interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  /* 다크모드 여부 */
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    DARK_MODE_KEY,
    defaultValue ?? isDarkOS ?? false,
  );

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS]);

  return {
    isDarkMode,
    toggle: () => setDarkMode(prev => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}
