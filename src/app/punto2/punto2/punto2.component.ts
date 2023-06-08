
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  palabras = [
    { palabra: 'casa', vocal: 2, consonante: 2, letras: 4 ,silaba:2},
    { palabra: 'hotel',  vocal: 2, consonante: 3, letras: 5 ,silaba:2},
    { palabra: 'departamento', vocal: 5, consonante: 7, letras: 12 ,silaba:5},
    { palabra: 'edificio',  vocal: 5, consonante: 3, letras: 8 ,silaba:4},
    { palabra: 'Museo',  vocal: 3, consonante: 2, letras: 5 ,silaba:3},
    { palabra: 'cabaña', vocal: 3, consonante: 3, letras: 6 ,silaba:3},
    { palabra: 'choza',  vocal: 2, consonante: 3, letras: 5 ,silaba:2},
    { palabra: 'oficina', vocal: 4, consonante: 3, letras: 7 ,silaba:4},
    { palabra: 'habitacion',  vocal: 5, consonante: 5, letras: 10 ,silaba:4},
    { palabra: 'consultorio',  vocal: 5, consonante: 6, letras: 11 ,silaba:4}
];
  correctas: number = 0;
  incorrectas: number = 0;
  iteracion: number = 1;
  num:number =0;
  numero:number =0;
  inicio:boolean=true;
  mostrar:boolean=false;
  vocales:boolean=true;
  silabas:boolean=true;
  letras:boolean=true;
  resultado:boolean=false;
  consonantes:boolean=true;
  primeraPalabra:string="";
  correcta:number=0;
  opcionesRespuesta: number[] = [0, 0, 0, 0];
  ngOnInit(): void {
   
  }

comenzar():void{
    this.empezar();
}
reiniciar(): void {
  this.num = 0;
  this.numero = 0;
  this.vocales = true;
  this.silabas = true;
  this.letras = true;
  this.consonantes = true;
  this.primeraPalabra = "";
  this.correcta = 0;
  this.opcionesRespuesta = [0, 0, 0, 0];
}
  
empezar():void{
this.inicio=false;
this.mostrar=true;
this.preguntas();
}
cambiar():number{
  let numero = Math.floor(Math.random() * 9) + 1; 
while (numero == this.opcionesRespuesta[0]  || numero == this.opcionesRespuesta[1] || numero == this.opcionesRespuesta[2] ||numero == this.opcionesRespuesta[3]) { 
  numero = Math.floor(Math.random() * 9) + 1; 
}
return numero;
}
preguntas(): void {
  this.num= Math.floor(Math.random() * 4) + 1;
  if (this.num == 1) {
    this.vocales = false;
  }
  if (this.num == 2) {
    this.consonantes = false;
  }
  if (this.num == 3) {
    this.letras = false;
  }
  if (this.num == 4) {
    this.silabas = false;
  }
  this.numero = Math.floor(Math.random() * 10);
  this.primeraPalabra = this.palabras[this.numero].palabra;

  if (this.vocales == false) {
    this.correcta = this.palabras[this.numero].vocal;
  }
  if (this.consonantes == false) {
    this.correcta = this.palabras[this.numero].consonante;
  }
  if (this.letras == false) {
    this.correcta = this.palabras[this.numero].letras;
  }
  if (this.silabas == false) {
    this.correcta = this.palabras[this.numero].silaba;
  }
  this.opcionesRespuesta[0]=this.correcta;
  this.opcionesRespuesta[1]=this.cambiar();
  this.opcionesRespuesta[2]=this.cambiar();
  this.opcionesRespuesta[3]=this.cambiar();
  this.opcionesRespuesta.sort(() => Math.random() - 0.5);
}

respuesta(respuesta: number): void {
  if (respuesta === this.correcta) {

    this.correctas++;
  } else {
    this.incorrectas++;
  }
  this.iteracion++;
  if (this.iteracion <= 8) {
    this.reiniciar();
    this.empezar();
}
}
recargar() {
  window.location.reload();
}
}