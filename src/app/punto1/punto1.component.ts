import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  productos = [
    { nombre: 'Notebook Asus 13L', descripcion: 'Disco 40GB, 15 pulgadas', img: 'notebook13l.jpg', precio: 45.5, cantidad: 1 },
    { nombre: 'Monitor LG 14', descripcion: 'Monitor hd 4K', img: 'producto02.jpg', precio: 99, cantidad: 1 },
    { nombre: 'Monitor LG 15', descripcion: 'Monitor con gran calidad', img: 'producto03.jpg', precio: 105, cantidad: 1 },
    { nombre: 'Teclado Logitech', descripcion: 'Teclado hermoso con rapido tecleo', img: 'producto04.jpg', precio: 30, cantidad: 1 },
    { nombre: 'Mouse Genius', descripcion: 'Mouse super accesible', img: 'producto05.jpg', precio: 15, cantidad: 1 },
    { nombre: 'Tablet Samsung', descripcion: 'Tablet para uso personal', img: 'producto06.jpg', precio: 110, cantidad: 1 }
];

  carrito: any[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: any) {
    if (!this.carrito.includes(producto)) {
      this.carrito.push(producto);
      this.actualizarTotal();
    }else{
      this.aumentarCantidad(producto);
    }
  }
  

  aumentarCantidad(producto: any) {
    producto.cantidad++;
    this.actualizarTotal();
  }
  
  disminuirCantidad(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.actualizarTotal();
    }
  }
  
  actualizarTotal() {
    this.total = this.carrito.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0);
  }
 
}