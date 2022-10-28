import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private http: HttpClient
  ) { }

  // Metodo que busca un registro dado un id
  buscarRegistroP(idpasajero: number) {
    const path = `http://localhost:8080/api/historial/pasajero/${idpasajero}`;
    return this.http.get<object[]>(path);
  }
  crearRegistro(registro: Registro) {
    const path = `http://localhost:8080/api/historial/pasajero/crear`;
    return this.http.post<object[]>(path,registro);
  }

  buscarRegistro(idregistro: number) {
    const path = `http://localhost:8080/api/historial/pasajero/${idregistro}`;
    return this.http.get<object[]>(path);
  }
  
  actualizarRegistro(registro: Registro) {
    const path = `http://localhost:8080/api/historial/actualizar/${registro}`;
    return this.http.get<object[]>(path);
  }
}