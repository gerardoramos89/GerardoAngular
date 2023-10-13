import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  private apiUrl = 'URL_DEL_BACKEND'; // Reemplaza con la URL real de tu API

  constructor(private http: HttpClient) { }

  realizarRecarga(recargaData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/realizarRecarga`, recargaData);
  }

  obtenerEstadisticas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/estadisticas`);
  }
}
