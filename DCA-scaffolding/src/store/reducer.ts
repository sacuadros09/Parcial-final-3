import { Actions, AppState, SomeActions } from "../types/store";




export const reducer = (actions:Actions, state: AppState) => {
    const {action,payload} = actions;




    switch (action) {
        case SomeActions.SAVE_COMIDA:
            state.comidas = [...state.comidas, payload];
            return state;
   
        default:
            return state;

            case SomeActions.GET_COMIDA:
            state.comidas = payload;
            return state;
   
            

    }
};