import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelo } from '../interfaces/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(
    private http: HttpClient
  ) { }

  // Método que obtiene la lista de vuelos
  listarVuelos(fecha:Date,origen:String, destino:String,cantidad:number ) {
    const path = `http://localhost:8080/api/vuelos/destinos/?fecha=${fecha}&origen=${origen}&destino=${destino}&cantidad=${cantidad}`;
    return this.http.get<Vuelo[]>(path);
  }

  //Metodo que busca un vuelo
   buscarVuelo(idvuelo:number ) {
    const path = `http://localhost:8080/api/vuelos/buscar/${idvuelo}`;
     return this.http.get<object[]>(path);
  }


}
