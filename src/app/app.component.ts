import { Component } from '@angular/core';
import { Alumno } from '../app/clases/alumno';
import { Profesor } from '../app/clases/profesor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo  @Input()  @Output()  ';
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado:Alumno;
  profesorParaMostrar : Profesor;
  listadoProfesoresPrincipal : Profesor[];

  constructor() { 

    this.listadoProfesoresPrincipal = [];
      this.profesorParaMostrar = new Profesor ( "Newton", "Fisica", 777);
        this.listadoPrincipal = [
          { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
          { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
        ];
    }

  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    this.listadoPrincipal.push(NuevoAlumno);   
  }
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;   
  }

  mostrarProfesor(Profesor:Profesor){
    console.log(this.profesorParaMostrar );
    //this.profesorParaMostrar = unProfesor;
    this.listadoProfesoresPrincipal.push(Profesor);
  }

  
}
