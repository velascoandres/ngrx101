import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HijoComponent} from './componentes/contador/hijo/hijo.component';
import {NietoComponent} from './componentes/contador/nieto/nieto.component';

import {contadorReducer} from './componentes/contador/contador.reducer';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {
        contador: contadorReducer, // Defino el estado de la aplicacion
      },
    ),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 25,
        logOnly: environment.production,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
