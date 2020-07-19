import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.component';
import {dividir, multiplicar} from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
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

  multiplicar(): void {
    this.store.dispatch(
      multiplicar({numero: 5}),
    );
  }

  dividir(): void {
    this.store.dispatch(
      dividir({numero: 5}),
    );
  }


}
