import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadOrigenService {

  constructor(
    private http: HttpClient
  ) { }

  //Metodo que lista las ciudades origenes
  listaOrigenes() {
    const path = 'http://localhost:8080/api/ciudad/origen';
    return this.http.get<object[]>(path);
  }
}