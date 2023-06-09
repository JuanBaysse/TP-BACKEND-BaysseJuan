import { Component, OnInit } from '@angular/core';
import { ConversorServiceService } from '../service/conversor-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pto2',
  templateUrl: './pto2.component.html',
  styleUrls: ['./pto2.component.css']
})
export class Pto2Component implements OnInit {
  coins:any;
  fromType!: string;
  toType!: string;
  modal!:string;
  transacciones: any[] = [];
  filtro!:boolean;
  constructor(private serviceConversor: ConversorServiceService,private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.modal="";
    this.filtro=false;
    this.coins=[];
    this.moneda(); 
    this.obtenerTransaccion();
  }

  moneda(){
    this.serviceConversor.getCoins().subscribe(Response => {
      for (const moneda in Response) {
        if (Response.hasOwnProperty(moneda)) {
          this.coins.push(Response[moneda]);
        }
      }
    });
  }
  obtenerTransaccion() {
    this.serviceConversor.obtenerTransacciones().subscribe(
      (response: any) => {
        this.transacciones = response;
      },
      (error: any) => {
        console.log('Error al obtener los productos destacados');
      }
    );
  }
  filtrarTransacciones(monedaOrigen: string, monedaDestino: string) {
    this.filtro=true;
    this.modal="Filtro realizado Exitosamente";
    this.serviceConversor
      .filtrarTransacciones(monedaOrigen, monedaDestino)
      .subscribe(
        (response: any) => {
          this.transacciones = response;
        },
        (error: any) => {
          console.log('Error al filtrar las transacciones');
        }
      );
    
  }

 

  mostrarTodas(){
    this.modal="Filtro eliminado Exitosamente";
    this.obtenerTransaccion();
    this.filtro=false;
  }
}
