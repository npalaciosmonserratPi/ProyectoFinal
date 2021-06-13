import * as fromTipologia from './tipologia.accions';
import { TipologiaModel } from '../../components/tipologias/models/tipologia.model';

// export interface State {
//     tipologias: TipologiaModel[]
// }
const initState: TipologiaModel[] = [];


export function tipologiaReducer( state = initState, action: fromTipologia.acciones): TipologiaModel[] {

    switch( action.type ) {

        case fromTipologia.AGREGAR_TIPOLOGIA:
            const tipologia = new TipologiaModel(action.tipologia);
            
            return [...state, tipologia];

        case fromTipologia.EDITAR_TIPOLOGIA:
        debugger
            return state.map( t => {
                if(t.id == action.id) {
                    let edit = new TipologiaModel(action.tipologia);

                    return {  ...edit }
                }
                else {
                    return t
                }
            })

        case fromTipologia.ELIMINAR_TIPOLOGIA:
            return state.map( t => {
                if(t.id == action.id) {
                    return {...t,
                            activo: false
                        }
                }
                else {
                    return t
                }
            })

        default:
            return state
    }
}
