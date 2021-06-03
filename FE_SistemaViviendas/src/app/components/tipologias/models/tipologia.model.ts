export class TipologiaModel {
    nombre: string;
    supLote: string;
    supCochera: string;
    costom2: any;
    plantaAlta: boolean;
    cantMaxHabitaciones: number;
    detalle: Array<SupCubiertaModel>;
    descripcion: string;
    planos: Array<string>;
    fotos: Array<string>;
}

export class SupCubiertaModel {
    name: string;
    supCubierta: string;
}