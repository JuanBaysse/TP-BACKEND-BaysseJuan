import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleto } from '../models/boleto';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private apiUrl = 'http://localhost:3000/api/tickets'; 
  

  constructor(private http: HttpClient) { }

  obtenerTickets(): Observable<any> {
    
    return this.http.get(this.apiUrl);
  }
  obtenerTicketsPorCategoria(categoria: string): Observable<any> {
    const url = `${this.apiUrl}/espectadores/${categoria}`;
    return this.http.get(url);
  }

  eliminarTicket(id: string): Observable<any> {
    const url = `http://localhost:3000/api/tickets/${id}`;
    return this.http.delete(url);
  }
  obtenerTicket(id: string): Observable<any> {
    const url = `http://localhost:3000/api/tickets/${id}`;
    return this.http.get(url);
  }
  registrarTicket(productoData: any): Observable<any> {
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
  modificarTicket(productoData: any,id:string): Observable<any> {
    const url = `http://localhost:3000/api/tickets/${id}`;
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

  private apiUrl1 = 'http://localhost:3000/api/espectadores'; 

  obtenerEspectadores(): Observable<any> {
    
    return this.http.get(this.apiUrl1);
  }
  
  
}
