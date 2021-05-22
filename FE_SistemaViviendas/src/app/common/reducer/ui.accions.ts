import { Action } from '@ngrx/store';

/**
 * Acciones posibles
 */
export const ACTIVAR_LOADING = '[UI Loading] Cargando...';
export const DESACTIVAR_LOADING = '[UI Loading] Fin de carga...';

/**
 * Funciones a llamar para disparar accciones
 */
export class ActivarLoadingAction implements Action {
    readonly type = ACTIVAR_LOADING;
}

export class DesactivarLoadingAction implements Action {
    readonly type = DESACTIVAR_LOADING;
}

/**
 * Exportar las acciones disponibles
 */
export type acciones = ActivarLoadingAction |
                        DesactivarLoadingAction