/* Core Imports */
import {createAction, props} from '@ngrx/store';

import { IFood } from 'src/app/models/app.model';

export const ADD_FOOD = createAction(
    'Add Food',
    props<{food: IFood}>()
);
export const DELETE_FOOD = createAction(
    'Delete Food',
    props<{food: IFood}>()
);
  