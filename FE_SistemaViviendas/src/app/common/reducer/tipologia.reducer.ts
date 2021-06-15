import * as fromTipologia from './tipologia.accions';
import { TipologiaModel, SupCubiertaModel } from '../../components/tipologias/models/tipologia.model';

// export interface State {
//     tipologias: TipologiaModel[]
// }
const initState: TipologiaModel[] = [];

const tipologia = new TipologiaModel({
    nombre: 'Compacta',
    supLote: '147',
    supCochera: '12',
    costom2SemiCubierto: '10000',
    costom2Cubierto: '30000',
    plantaAlta: false,
    cantMaxHabitaciones: '0',
    detalle: new Array<SupCubiertaModel>()
});

const monoambiente = new SupCubiertaModel();
monoambiente.name = 'Monoambiente';
monoambiente.supCubierta = '30'

tipologia.detalle.push(monoambiente);

initState.push(tipologia)  

export function tipologiaReducer( state = initState, action: fromTipologia.acciones): TipologiaModel[] {

    switch( action.type ) {

        case fromTipologia.AGREGAR_TIPOLOGIA:
            const tipologia = new TipologiaModel(action.tipologia);
            
            return [...state, tipologia];

        case fromTipologia.EDITAR_TIPOLOGIA:
            return state.map( t => {
                if(t.id == action.id) {
                    let edit = new TipologiaModel(action.tipologia);

                    return {  ...edit }
                }   
                else {
                    return t
                }
            });

        case fromTipologia.SUSPENDER_TIPOLOGIA:
            return state.map( t => {
                if(t.id == action.id) {
                    return {...t,
                            activo: false
                        }
                }
                else {
                    return t
                }
            });

        case fromTipologia.HABILITAR_TIPOLOGIA:
            return state.map( t => {
                if(t.id == action.id) {
                    return {...t,
                            activo: true
                        }
                }
                else {
                    return t
                }
            });

        default:
            return state
    }
}
