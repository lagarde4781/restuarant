import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

import { StoreModule } from '@ngrx/store';
import {APP_REDUCER, appReducer} from './store/reducers/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( {state: appReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Restaurant',
      maxAge: 25,
      logOnly: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
