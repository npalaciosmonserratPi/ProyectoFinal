import { Action } from '@ngrx/store';
import { type } from 'node:os';
import { TipologiaModel } from '../../components/tipologias/models/tipologia.model';


export const AGREGAR_TIPOLOGIA ='[Tipologia] Agregar nueva tipologia';
export const EDITAR_TIPOLOGIA = '[Tipologia] Editar tipologia';
export const ELIMINAR_TIPOLOGIA = '[Tipologia] Eliminar tipologia';


export class AgregarTipologiaAction implements Action {
    readonly type = AGREGAR_TIPOLOGIA;

    constructor( public tipologia: TipologiaModel ) {}
}

export class EditarTipologiaAction implements Action {
    readonly type = EDITAR_TIPOLOGIA;

    constructor( public id: string ,public tipologia: TipologiaModel ) {}
}

export class EliminarTipologiaAction implements Action {
    readonly type = ELIMINAR_TIPOLOGIA;

    constructor( public id: string ) {}
}


export type acciones = AgregarTipologiaAction |
                        EditarTipologiaAction |
                        EliminarTipologiaAction;