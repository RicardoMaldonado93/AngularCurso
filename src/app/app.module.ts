import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { DetalleAlumnosComponent } from './componentes/detalle-alumnos/detalle-alumnos.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';
import { ListadoProfesoresComponent } from './componentes/listado-profesores/listado-profesores.component';
@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListadoAlumnosComponent,
    DetalleAlumnosComponent,
    ProfesorComponent,
    DetalleProfesorComponent,
    ListadoProfesoresComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
