import { foods, IFood } from 'src/app/models/app.model';
import {createReducer} from '@ngrx/store';
import {on} from '@ngrx/store'
import { ADD_FOOD } from '../actions/app.actions';

export interface AppState {
  menu: Array<IFood>;
  order: Array<IFood>;
}

export const initialAppState = (): AppState => ({
    menu: foods,
    order: []
});


export const APP_REDUCER = createReducer(
  {
    menu: foods,
    order: []
},
  on(ADD_FOOD, (state, {food}) => ({
    ...state,
    order: [
      ...state.order,
      food
    ]
  })),

);

export function appReducer(state, action) {
  return APP_REDUCER(state, action);
}



