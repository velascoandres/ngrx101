import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as acciones from './componentes/contador/contador.actions';

export interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx101';
  contador: number;

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.store
      .select('contador')
      .subscribe(
        (contador: number) => {
          console.log(contador);
          this.contador = contador;
        }
      );
  }

  incrementar(): void {
    this.store.dispatch(
      acciones.incrementar(),
    );
  }

  decrementar(): void {
    this.store.dispatch(
      acciones.decrementar(),
    );
  }

  escucharContador(nuevoValor: number): void {
    this.contador = nuevoValor;
  }
}
