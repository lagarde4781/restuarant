import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFood } from 'src/app/models/app.model';
import {
  selectBrunchs,
  selectBreafast,
  selectDinners,
  selectDrinks,
  selectDesserts,
} from 'src/app/store/selectors/app.selectors';
import { ADD_FOOD } from '../../store/actions/app.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  breakfast$: Observable<Array<IFood>> = this.store.select(selectBreafast);
  dinners$: Observable<Array<IFood>> = this.store.select(selectDinners);
  brunchs$: Observable<Array<IFood>> = this.store.select(selectBrunchs);
  desserts$: Observable<Array<IFood>> = this.store.select(selectDesserts);
  drinks$: Observable<Array<IFood>> = this.store.select(selectDrinks);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addFood(food: IFood): void {
    this.store.dispatch(
      ADD_FOOD({food})
    );
  }
}
