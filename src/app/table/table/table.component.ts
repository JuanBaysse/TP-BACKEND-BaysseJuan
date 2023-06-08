import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/service/ticket.service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tickets: Array<Ticket>;
  ticketsFiltrados: Array<Ticket>;
  tipoEspectador: string = '';
  resumen:boolean=false;
  constructor(private ticketService: TicketService,private router:Router) {
    this.tickets = new Array<Ticket>();
    this.ticketsFiltrados = new Array<Ticket>();
  }

  ngOnInit() {
    this.cargarTickets();
  }

  cargarTickets() {
    this.tickets = this.ticketService.getTickets();
    this.filtrarTickets(this.tipoEspectador);
  }

  agregarTicket() {
    this.router.navigate(["punto5",0]);
  }

  modificarTicket(ticket: Ticket) {
    this.router.navigate(["punto5", ticket.id]);
  }

  eliminarTicket(ticket: Ticket) {
    this.ticketService.eliminaTicket(ticket.id);
    this.cargarTickets();
  }

  filtrarTickets(tipo: string) {
    if (tipo === '') {
      this.ticketsFiltrados = this.tickets;
    } else {
      this.ticketsFiltrados = this.tickets.filter(ticket => ticket.tipoEspectador === tipo);
    }
  }
  mostrar():void{
    this.resumen = !this.resumen;
  }
  get totalDinero(): number {
    return this.ticketsFiltrados.reduce((total, ticket) => total + ticket.precioCobrado, 0);
  }
}