import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import {Alumno} from'../alumno';
@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {
  alumno : Alumno;
  id: number;
 alumnos=null;
  constructor(private _route : ActivatedRoute, private alumnosServicio:AlumnosService){}
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    
   //this._route.params.subscribe((param: Params) => {this.id = +param['id'];this.alumno = this.alumnosServicio.getAlumno(this.id)});
   this.alumnosServicio.getAlumno(id).subscribe(
     result =>this.alumno = result[0]
   );  
 }
 editAlumno(){
   this.alumnosServicio.updateAlumno(this.alumno).subscribe(
     datos =>{
       if(datos['resultado'] == 'OK'){
         alert(datos['mensaje']);
         this.obtenerAlumnos();
       }
     }
   );
 }
 obtenerAlumnos(){
   this.alumnosServicio.getAlumnos().subscribe(
     result =>this.alumnos = result
   );
 }
}
