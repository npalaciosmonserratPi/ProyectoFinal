
import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './common/reducer/ui.reducer';
import * as fromTipologia from './common/reducer/tipologia.reducer';
import { TipologiaModel } from './components/tipologias/models/tipologia.model';

export interface AppState {
    ui: fromUI.State,
    tipologias: TipologiaModel[]
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    tipologias: fromTipologia.tipologiaReducer
};