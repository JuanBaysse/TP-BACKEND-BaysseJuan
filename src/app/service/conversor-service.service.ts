import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moneda } from '../pageb/pageb/moneda';
import { Transaccion } from '../models/Transaccion';

@Injectable({
  providedIn: 'root'
})
export class ConversorServiceService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';
 
  private headers = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '19a250ff46msh379870c25c6c679p19e68djsnc8e9644d04d5',
    'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
  });

  
  convertCurrency(fromValue: string, fromType: string, toType: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('from-value', fromValue);
    body.set('from-type', fromType);
    body.set('to-type', toType);

    return this.http.post(this.apiUrl, body.toString(), { headers: this.headers });
  }
  private rapidApiKey = 'bc22e9b8bdmsh3ae7710e48b7c8fp1dee68jsn447b5808a3ea';
  private rapidApiHost = 'awesomeapi-exchange.p.rapidapi.com';
  
  getCurrencies(): Observable<Moneda[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': this.rapidApiKey,
        'X-RapidAPI-Host': this.rapidApiHost
      })
    };
    return this.http.get<Moneda[]>('https://awesomeapi-exchange.p.rapidapi.com/JSON/all', httpOptions);
  }
  private apiUrl1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  getCoins(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'bc22e9b8bdmsh3ae7710e48b7c8fp1dee68jsn447b5808a3ea',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      })
    };
    return this.http.get<any>('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies', httpOptions);
}

private apiUrl2 = 'http://localhost:3000/api/transacciones';

registrarTransaccion(productoData: Transaccion): Observable<any> {
  let HttpOption={
    headers: new HttpHeaders(
      {
        "Content-type": "application/json"
      }
    ),
    params: new HttpParams()
  }
  let body = JSON.stringify(productoData);
  return this.http.post(this.apiUrl2, body,HttpOption);
}
 

}

