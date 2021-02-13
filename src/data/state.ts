import { combineReducers } from './combineReducers';
import { componentReducer } from './component/component.reducer';
import { userReducer } from './user/user.reducer';

export const initialState: AppState = {
  user: {
    darkMode: false,
  },
  component: {
    basicTab: 'basic tab 1',
    colorTab: 'color tab 1',
    tabColor: 'primary',
    tabHighlight: 'light',
  }
};

export const reducers = combineReducers({
  user: userReducer,
  component: componentReducer
});

export type AppState = ReturnType<typeof reducers>;