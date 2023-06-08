import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pto1',
  templateUrl: './pto1.component.html',
  styleUrls: ['./pto1.component.css']
})
export class Pto1Component implements OnInit {

  productosDestacados: any[] = [];

  constructor(private productoService: ProductoService , private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerProductosDestacados();
  }

  obtenerProductosDestacados() {
    this.productoService.obtenerProductosDestacados().subscribe(
      (response: any) => {
        this.productosDestacados = response;
      },
      (error: any) => {
        console.log('Error al obtener los productos destacados');
      }
    );
  }

  Agregar() {
    this.router.navigate(["punto1A"]);
  }
}