import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.component';
import {reset} from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador: number;

  constructor(
    private readonly store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(
      (contador: number) => {
        this.contador = contador;
      }
    );
  }

  reset(): void {
    this.store.dispatch(
      reset(),
    );
  }

}
