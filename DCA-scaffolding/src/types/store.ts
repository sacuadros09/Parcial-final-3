import {Comida} from "./comida";


export type Observer = { render: () => void } & HTMLElement;


export type AppState = {
 comidas: Comida[];
};


export enum SomeActions {
  "SAVE_COMIDA" = "SAVE_COMIDA",
  "GET_COMIDA" = "GET_COMIDA",
}


export interface SaveComidaAction {
  action: SomeActions.SAVE_COMIDA;
  payload: Comida;
}


export interface GetComidaAction {
  action: SomeActions.GET_COMIDA;
  payload: Comida[];
}


export type Actions = SaveComidaAction |GetComidaAction ;
