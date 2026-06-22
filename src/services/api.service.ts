import { Injectable } from '@angular/core';
// HTTpClient en vez de fetch ya que es mas potente y se maneja mejor los erorres
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { EdificioPoo } from '../models/edificio.model';
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
  getEdificios(page: number, filtros: EdificioPoo): Observable<HttpResponse<any[]>> {
    // Formamos la url
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', '15')
      
      // Iteramos el objeto de filtros y lo agregamos a HttpParams()
      Object.entries(filtros).forEach(([key, value]) => {
        if (value && value !== 'Todos') {
          params = params.set(key, String(value).trim());
        }
      })

    // devolvemos la respuesta completa para poder acceder a los headers (x-total-count)
    console.log(params.toString());
    
    return this.http.get<any[]>(this.baseUrl, { 
      params: params, // Pasamos los parámetros a la solicitud
      observe: 'response' // Esto nos permite obtener los headers (x-total-count)
    });
  }

  // Metodo para devolver todos los 200 edifcios 
  getEdificioMap(): Observable<any[]> {
     return this.http.get<any[]>(this.baseUrl);
  }

}
