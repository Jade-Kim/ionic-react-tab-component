import { ComponentActions } from './component.actions';
import { ComponentState } from './component.state';

export function componentReducer(state: ComponentState, action: ComponentActions): ComponentState {
  switch (action.type) {
    case 'set-basic-tab':
      return { ...state, basicTab: action.basicTab };
    case 'set-color-tab':
      return { ...state, colorTab: action.colorTab };
    case 'set-tab-color':
      return { ...state, tabColor: action.tabColor };
    case 'set-tab-highlight':
      return { ...state, tabHighlight: action.tabHighlight };
  }
}