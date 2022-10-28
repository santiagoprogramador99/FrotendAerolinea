import { Vuelo } from "./vuelo";

export interface Reserva {
    idreserva:number;
    estado:String;
    idvueloida:Vuelo;
    idvuelovuelta:Vuelo;
}