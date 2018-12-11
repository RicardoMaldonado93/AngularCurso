import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/clases/profesor';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  @Input() listadoProfesores : Profesor[]; 
  @Output() mostrarProfesorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  detalleProfesor(unProfesor : Profesor){
    console.log( unProfesor);
    this.mostrarProfesorSeleccionado.emit(unProfesor);
  }
}
