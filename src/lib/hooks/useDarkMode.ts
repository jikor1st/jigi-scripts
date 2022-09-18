// See: https://usehooks-ts.com/react-hook/use-local-storage
import {
  useLocalStorage,
  useConditionEffect,
  useMediaQuery,
} from '@/lib/hooks';
// See: https://usehooks-ts.com/react-hook/use-update-effect

// presets
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
const DARK_MODE_KEY = 'isDarkMode';

export interface UseDarkModeOutput {
  colorMode: 'light' | 'dark';
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  /* 다크모드 여부 */
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    DARK_MODE_KEY,
    defaultValue ?? isDarkOS ?? false,
  );

  /* 칼라모드 */
  const colorMode = isDarkMode ? 'dark' : 'light';

  // Update darkMode if os prefers changes
  useConditionEffect(
    () => {
      setDarkMode(isDarkOS);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [isDarkOS],
    {
      componentDidMountCondition: false,
    },
  );

  return {
    isDarkMode,
    colorMode,
    toggle: () => setDarkMode(prev => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}

export { useDarkMode };
