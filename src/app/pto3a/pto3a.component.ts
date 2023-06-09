import { Component, OnInit } from '@angular/core';
import { Boleto } from '../models/boleto';
import { TicketsService } from '../service/tickets.service';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-pto3a',
  templateUrl: './pto3a.component.html',
  styleUrls: ['./pto3a.component.css']
})
export class Pto3aComponent implements OnInit {
  modal!:string;
  ticketsFiltrados: any[] = [];
  tipoEspectador: string = '';
  resumen:boolean=false;
  constructor(private ticketService: TicketsService,private router:Router) {
    this.ticketsFiltrados = new Array<any>();
  }

  ngOnInit() {
    this.obtenerTicketsDestacados();
  }
 tickets: any[] = [];
  cargarTickets() {
    this.filtrarTickets(this.tipoEspectador);
  }
  obtenerTicketsDestacados() {
    this.ticketService.obtenerTickets().subscribe(
      (response: any) => {
        this.tickets = response;
        this.filtrarTickets(this.tipoEspectador);
      },
      (error: any) => {
        console.log('Error al obtener los productos destacados');
      }
    );
  }

  agregarTicket() {
    this.router.navigate(["punto5",0]);
  }

  modificarTicket(ticket: any) {
    this.router.navigate(["punto5", ticket._id]);
  }

  eliminarTicket(ticket: any) {
    this.ticketService.eliminarTicket(ticket._id).subscribe(
      (response: any) => {
       if(response.status == 1){
        this.modal=response.msg;
        this.obtenerTicketsDestacados();
       }
      },
      error=>{
        this.modal=error.msg;
      }
    );
  }

  filtrarTickets(tipo: string): void {
    if (tipo === '') {
      this.ticketsFiltrados = this.tickets;
    } else {
      if (tipo === 'l') {
        this.ticketService.obtenerTicketsPorCategoria(tipo).subscribe(
          (response: any) => {
            this.ticketsFiltrados = response;
          },
          (error: any) => {
            console.log('Error al obtener los tickets por categoría');
          }
        );
      } else {
        this.ticketService.obtenerTicketsPorCategoria(tipo).subscribe(
          (response: any) => {
            this.ticketsFiltrados = response;
          },
          (error: any) => {
            console.log('Error al obtener los tickets por categoría');
          }
        );
      }
    }
  }
  
  mostrar():void{
    this.resumen = !this.resumen;
  }
  get totalDinero(): number {
    return this.ticketsFiltrados.reduce((total, ticket) => total + ticket.precioTicket, 0);
  }
}
