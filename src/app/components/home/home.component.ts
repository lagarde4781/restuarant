/* Core Imports */
import { Component, OnInit } from '@angular/core';

/* Ngrx Imports */
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers/app.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => { console.log(state); })  ;
  }

  ngOnInit(): void {
  }

}
