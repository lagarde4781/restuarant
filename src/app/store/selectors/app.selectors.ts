import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, initialAppState } from '../reducers/app.reducer';
import { IFood } from 'src/app/models/app.model';

export const selectMenu = (state: AppState) => initialAppState().menu;

export const selectBrunchs = createSelector(selectMenu, (menu) =>
  menu.filter((food: IFood) => food.type === 'Comidas')
);
export const selectBreafast = createSelector(selectMenu, (menu) =>
  menu.filter((food: IFood) => food.type === 'Desayuno')
);
export const selectDinners = createSelector(selectMenu, (menu) =>
  menu.filter((food: IFood) => food.type === 'Cenas')
);
export const selectDrinks = createSelector(selectMenu, (menu) =>
  menu.filter((food: IFood) => food.type === 'Bebidas')
);
export const selectDesserts = createSelector(selectMenu, (menu) =>
  menu.filter((food: IFood) => food.type === 'Postre')
);
