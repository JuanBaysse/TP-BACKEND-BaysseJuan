import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../service/tickets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from '../models/boleto';
import { Espectador } from '../models/espectador';

@Component({
  selector: 'app-pto3',
  templateUrl: './pto3.component.html',
  styleUrls: ['./pto3.component.css']
})
export class Pto3Component implements OnInit {
  ticket!:any;
  espectadores:any[]=[];
  accion: string = "new";
  constructor(private ticketService: TicketsService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
      this.ticket= new Boleto();
     }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.listarEspectador();
      } else {
        this.accion = "update";
        this.cargarTicket(params['id']);
        this.listarEspectador();
      }
    });
  }

  cargarTicket(id:string){
    this.ticketService.obtenerTicket(id).subscribe(
      (response: any) => {
        this.ticket=response;
      },
      error=>{
        alert(error.msg)
      }
    );
  }
  registrar() {
    console.log('Producto a enviar:', JSON.stringify(this.ticket));
    this.ticketService.registrarTicket(this.ticket).subscribe(
      (response: any) => {
       if(response.status == 1){
        //this.modal=response.msg;
        //alert(response.msg)
       }
      },
      error=>{
        //this.modal=error.msg;
        alert(error.msg)
      }
    );
    this.router.navigate(["punto5b"]);
  }
  listarEspectador(){
    this.ticketService.obtenerEspectadores().subscribe(
      (response: any) => {
        this.espectadores = response;
        //console.log(response);
      },
      (error: any) => {
        console.log('Error al obtener los productos destacados');
      }
    );
    }

    modificar() {
      this.ticketService.modificarTicket(this.ticket,this.ticket._id).subscribe(
        (response: any) => {
         if(response.status == 1){
          //this.modal=response.msg;
          //alert(response.msg)
         }
        },
        error=>{
          //this.modal=error.msg;
          alert(error.msg)
        }
      );
      this.router.navigate(["punto5b"]);
    }
    volver() {
      this.router.navigate(["punto5b"]);
    }
    transformarFecha() {
      const fechaParts = this.ticket.fechaCompra.split('/'); // Obtener las partes de la fecha (día, mes, año)
      const dia = fechaParts[0];
      const mes = fechaParts[1];
      const anio = fechaParts[2];
    
      // Construir la nueva fecha en formato requerido por el backend (año-mes-día)
      const nuevaFecha = `${anio}-${mes}-${dia}`;
    
      // Asignar la nueva fecha al modelo
      this.ticket.fechaCompra = nuevaFecha;
    }
    }
