import { ActionType } from '../../util/types';

export const setDarkMode = (darkMode: boolean) => ({
  type: 'set-dark-mode',
  darkMode
} as const);

export type UserActions =
  | ActionType<typeof setDarkMode> 
