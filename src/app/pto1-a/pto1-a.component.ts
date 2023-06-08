import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../service/producto.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pto1-a',
  templateUrl: './pto1-a.component.html',
  styleUrls: ['./pto1-a.component.css']
})

export class Pto1AComponent implements OnInit {
 
  modal!:string;
  producto!:Product;

  constructor(private productoService: ProductoService,private router: Router,
    private activateRoute: ActivatedRoute) { 
    this.producto= new Product();
    this.producto.destacado=false;
  }

  ngOnInit() {
  }
 
  onSubmit() {
    console.log('Producto a enviar:', JSON.stringify(this.producto));
    this.productoService.registrarProducto(this.producto).subscribe(
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
  volver(){
    this.router.navigate(["punto1"]);
  }
}
