import { Comida } from "../types/comida";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";


export const saveComida = async (comida: Comida): Promise <Actions>  => {
   await firebase.saveComidaInDB(comida);
   return{
    action: SomeActions.SAVE_COMIDA,
     payload: comida,
   };
};


export const getComida = async (): Promise <Actions>  => {
    const comida =await firebase.getComidaFromDB();
    return{
     action: SomeActions.GET_COMIDA,
      payload: comida,
    };
 };
