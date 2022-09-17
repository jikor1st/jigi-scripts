import { atom } from 'recoil';
import { v4 } from 'uuid';

export type HtmlFontSizeStateType = number;
const initialValue: HtmlFontSizeStateType = 16;

export const htmlFontSizeState = atom<HtmlFontSizeStateType>({
  key: v4(),
  default: initialValue,
});
