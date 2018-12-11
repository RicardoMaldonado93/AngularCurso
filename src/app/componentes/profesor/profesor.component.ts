import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  @Output() seCreoUnProfesor: EventEmitter<any>= new EventEmitter<any>();
  unProfesor : Profesor;

  constructor() { 
    
  }

  ngOnInit() {
  }

  nuevoProfesor(){
    this.unProfesor = new Profesor("","",0);
  }

  crearUnProfesor(){

    this.seCreoUnProfesor.emit(this.unProfesor);
    this.unProfesor=null;
  }
}
