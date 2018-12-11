import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.css']
})
export class DetalleProfesorComponent implements OnInit {

  @Input() unProfesor: Profesor ;
  @Output() borrarProfesor : EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  
   }

  ngOnInit() {
  }

  borrarRegistro(){

    this.borrarProfesor.emit(this.unProfesor);
    this.unProfesor = null;
  }

}
