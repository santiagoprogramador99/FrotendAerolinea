import { Ruta } from "./ruta";

export interface Vuelo {
    idvuelo:number;
    fecha:Date;
    escala:String;
    preciopersona:number;
    sillasdisponibles:number;
    numerovuelo:number;
    duracion:String;
    hora:String;
    idruta:Ruta;
}