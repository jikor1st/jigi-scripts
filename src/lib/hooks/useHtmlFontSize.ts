import { useEffect } from 'react';
import { useLocalStorage } from '@/lib/hooks';

const HTML_FONT_SIZE_KEY = 'html-font-size';
const DEFAULT_VALUE = 16;

export interface UseHtmlFontSizeOutput {
  htmlFontSize: number;
  changeHtmlFontSize: (fontSize: number) => void;
}

export function useHtmlFontSize(): UseHtmlFontSizeOutput {
  const [htmlFontSize, setHtmlFontSize] = useLocalStorage<number>(
    HTML_FONT_SIZE_KEY,
    DEFAULT_VALUE,
  );

  useEffect(() => {
    const htmlEl = document.querySelector('html');
    if (htmlEl) {
      htmlEl.style.fontSize = `${htmlFontSize}px`;
      setHtmlFontSize(htmlFontSize);
    }
  }, [htmlFontSize]);

  return {
    htmlFontSize,
    changeHtmlFontSize: fontSize =>
      setHtmlFontSize(prev => (prev !== fontSize ? fontSize : prev)),
  };
}
