import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/service/ticket.service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ticket: Ticket;
  originalTicket: Ticket; 
  accion: string = "new";

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.ticket = new Ticket();
    this.originalTicket = new Ticket();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
      } else {
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }

  cargarTicket(id: string) {
    this.originalTicket = this.ticketService.getTicket(id); 
    this.ticket = { ...this.originalTicket }; 
  }

  registrar() {
    this.ticketService.agregarTicket(this.ticket);
    this.router.navigate(["punto5b"]);
  }

  cambioPrecio(numero: number): number {
    return numero * 0.8;
  }

  Modificar() {
    this.ticketService.modificarTicket(this.ticket);
    this.router.navigate(["punto5b"]);
  }

  volver() {
    this.ticket = { ...this.originalTicket }; 
    this.router.navigate(["punto5b"]);
  }
}