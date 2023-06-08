import { Component, OnInit } from '@angular/core';
import { ConversorServiceService } from '../../service/conversor-service.service';
import { Moneda } from './moneda';
import { Transaccion } from 'src/app/models/Transaccion';
import { Alert } from 'bootstrap';



@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})

export class PagebComponent implements OnInit {

  coins:any;
  transaccion!:Transaccion;
  modal!:string;
  constructor(private serviceConversor: ConversorServiceService) { 
    this.transaccion= new Transaccion();
   
  }
  fromValue!: string;
  fromType!: string;
  toType!: string;
  result!:string;
  email!:string;
   resultNumber!:number ;
  ngOnInit(): void {
    this.coins=[];
       this.moneda(); 
    console.log(this.resultNumber)
  }


  convert() {
    this.serviceConversor.convertCurrency(this.fromValue, this.fromType, this.toType).subscribe(response => {
      console.log(response);
      this.result = response.result;
      this.resultNumber = parseFloat(this.result.replace(",", "."));
      this.transaccion.cantidadDestino = this.resultNumber;
      this.transaccion.tasaConversion = this.transaccion.cantidadDestino / this.transaccion.cantidadOrigen;
      console.log(this.transaccion.cantidadDestino);
    });
    this.transaccion.cantidadOrigen = parseInt(this.fromValue);
    this.transaccion.emailCliente = this.email;
    this.transaccion.monedaOrigen = this.fromType;
    this.transaccion.monedaDestino = this.toType;
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

  onSubmit() {
    console.log('Producto a enviar:', JSON.stringify(this.transaccion));
    this.serviceConversor.registrarTransaccion(this.transaccion).subscribe(
      (response: any) => {
       if(response.status == 1){
        this.modal=response.msg;
       }
      },
      error=>{
        this.modal=error.msg;
      }
    );
  }
}