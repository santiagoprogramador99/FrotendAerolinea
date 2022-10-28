import { Pasajero } from "./pasajero";
import { Reserva } from "./reserva";
import { Vuelo } from "./vuelo";

export interface Tiquete {
    idtiquete:number;
    totalpago:number;
    cantidadpersonas:number;
    idpasajero:Pasajero;
    idreserva:Reserva;
    idvuelo:Vuelo;
}