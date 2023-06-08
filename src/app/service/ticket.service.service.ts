import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: Array<any>;


  constructor() { 
    this.tickets = new Array<Ticket>();
    this.tickets = [];
  }
  getIdDisponible(){
    var maxid: number;
    maxid = 0;
    for ( var i = 0; i < this.tickets.length;i++){
    if(maxid < this.tickets[i].id){
    maxid = this.tickets[i].id;
    }
    };
    return (maxid + 1);
    }
   

  agregarTicket(ticket: Ticket) {
    ticket.precioCobrado=this.calcularPrecioCobrado(ticket.precioReal,ticket.tipoEspectador);
    ticket.id=this.getIdDisponible();
    ticket.fechaCobro=  new Date();
    this.tickets.push(ticket);
  }
  modificarTicket(ticket: Ticket) {
    let ticket1 =this.getTicket(ticket.id.toString());
    ticket1.dni=ticket.dni;
    ticket1.tipoEspectador=ticket.tipoEspectador;
    ticket1.precioReal=ticket.precioReal;
    ticket1.precioCobrado=this.calcularPrecioCobrado(ticket.precioReal,ticket.tipoEspectador);  
  }

  getTickets() {
    return this.tickets;
  }

  eliminaTicket(id: number) {
    let indexTicket:number = this.tickets.findIndex(t => (t.id == id));
    this.tickets.splice(indexTicket,1);
  }
  calcularPrecioCobrado(precioReal: number, tipoEspectador: string): number {
    if (tipoEspectador == 'l') {
      return precioReal * 0.8;
    } else {
      return precioReal;
    }
  }
  getTicket(id:string):Ticket {
    let ticket:Ticket = new Ticket();
    let indexTicket:number = this.tickets.findIndex(t => (t.id == id));
    ticket = this.tickets[indexTicket];
    return ticket;
  }
  
}