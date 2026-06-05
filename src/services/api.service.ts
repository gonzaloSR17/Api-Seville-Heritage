import { Injectable } from '@angular/core';
// HTTpClient en vez de fetch ya que es mas potente y se maneja mejor los erorres
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable

 } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  // URL de la API
  private baseUrl = 'https://backend-api-seville-heritage.onrender.com/data';

  // Constructor para usar HttpClient
  constructor(private http: HttpClient) {}

  // Metodo para recibir filtros y páginas
  // devuelve TODA la respuesta
  getEdificios(page: number, filtros: string): Observable<HttpResponse<any[]>> {
    // Formamos la url
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', '15')
      .set('filtros', filtros); // Ajusta esto según cómo funcione tu API

    // devolvemos la respuesta completa para poder acceder a los headers (x-total-count)
    console.log(params.toString());
    
    return this.http.get<any[]>(this.baseUrl, { 
      params: params, // Pasamos los parámetros a la solicitud
      observe: 'response' // Esto nos permite obtener los headers (x-total-count)
    });
  }
}
