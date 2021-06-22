export class TipologiaModel {
    id: string;
    nombre: string;
    supLote: string;
    supCochera: string;
    costom2SemiCubierto: any;
    costom2Cubierto: any;
    plantaAlta: boolean;
    cantMaxHabitaciones: number;
    detalle: Array<SupCubiertaModel>;
    descripcion: string;
    planos: Array<string>;
    fotos: Array<string>;
    activo: boolean;

    constructor(tipologia? ) {
        this.id = Math.random().toString(36);

        this.nombre = tipologia ? tipologia.nombre : '';
        this.supLote = tipologia ? tipologia.supLote : '';
        this.supCochera = tipologia ? tipologia.supCochera : '';
        this.costom2SemiCubierto = tipologia ? tipologia.costom2SemiCubierto : '';
        this.costom2Cubierto = tipologia ? tipologia.costom2Cubierto : '';
        this.plantaAlta = tipologia ? tipologia.plantaAlta : '';
        this.cantMaxHabitaciones = tipologia ? tipologia.cantMaxHabitaciones : '';
        this.detalle = tipologia ? tipologia.detalle : '';
        this.descripcion = tipologia ? tipologia.descripcion : '';
        this.planos =tipologia ?  tipologia.planos : '';
        this.fotos = tipologia ? tipologia.fotos : '';
        this.activo = true;
    }
}

export class SupCubiertaModel {
    name: string;
    supCubierta: string;
}
