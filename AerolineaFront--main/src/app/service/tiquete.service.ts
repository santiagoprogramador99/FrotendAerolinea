import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tiquete } from '../interfaces/tiquete';

@Injectable({
  providedIn: 'root'
})
export class TiqueteServe {

  constructor(
    private http: HttpClient
  ) { }

  crearTiquete(tiquete: Tiquete) {
    const path = `http://localhost:8080/api/tiquete/crear`;
    return this.http.post<object[]>(path,tiquete);
  }
}