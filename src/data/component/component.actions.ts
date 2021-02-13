import { ActionType } from '../../util/types';

export const setBasicTab = (basicTab: string) => ({
  type: 'set-basic-tab',
  basicTab
} as const);

export const setColorTab = (colorTab: string) => ({
  type: 'set-color-tab',
  colorTab
} as const);

export const setTabColor = (tabColor: string) => ({
  type: 'set-tab-color',
  tabColor
} as const);

export const setTabHighlight = (tabHighlight: string) => ({
  type: 'set-tab-highlight',
  tabHighlight
} as const);

export type ComponentActions =
| ActionType<typeof setBasicTab> | ActionType<typeof setColorTab> | ActionType<typeof setTabColor> | ActionType<typeof setTabHighlight>
