import { Component, OnInit } from '@angular/core';
import {AlumnosService} from '../alumnos.service';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  alumnos=null;

  alumno={
   Matricula: null,
        Nombres:null,
         Apellido_Paterno: null,
         Apellido_Materno: null,
         Edad: null
  }

  constructor(private alumnosServicio:AlumnosService) { }

  ngOnInit() {
  }
  obtenerAlumnos(){
    this.alumnosServicio.getAlumnos().subscribe(
      result =>this.alumnos = result
    );
  }

  altaAlumnos(){
    this.alumnosServicio.addAlumno(this.alumno).subscribe(
      datos =>{
        if(datos['resultado']=='OK'){
          alert(datos['mensaje']);
          this.obtenerAlumnos();
        }
      }
    );
  }
}
