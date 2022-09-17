import { atom } from 'recoil';
import { v4 } from 'uuid';

export interface DarkModeStateType {
  mode: 'light' | 'dark';
}
const initialValue: DarkModeStateType = {
  mode: 'light',
};

export const darkModeState = atom<DarkModeStateType>({
  key: v4(),
  default: initialValue,
});
