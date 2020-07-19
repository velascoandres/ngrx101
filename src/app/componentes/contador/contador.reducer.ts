import {Action, createReducer, on} from '@ngrx/store';
import {decrementar, dividir, incrementar, multiplicar, reset} from './contador.actions';
import {AppState} from '../../app.component';

const estadoInicial = 20;

const _contadorReducer = createReducer(
  estadoInicial,
  on(incrementar, estado => estado + 1),
  on(decrementar, estado => estado - 1),
  on(multiplicar, (estado: number, {numero}) => estado * numero),
  on(dividir, (estado: number, {numero}) => estado / numero),
  on(reset, estado => 0),
);

// tslint:disable-next-line:typedef
export function contadorReducer(
  estado: number,
  accion: Action,
) {
  return _contadorReducer(estado, accion);
}
