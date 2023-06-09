import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:3000/api/product'; 

  constructor(private http: HttpClient) { }

  obtenerProductosDestacados(): Observable<any> {
    const url = `${this.apiUrl}/featured`;
    return this.http.get(url);
  }

  registrarProducto(productoData: Product): Observable<any> {
    let HttpOption={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(productoData);
    return this.http.post(this.apiUrl, body,HttpOption);
  }
}