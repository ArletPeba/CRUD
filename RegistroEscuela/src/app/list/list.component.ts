import { Component, OnInit } from '@angular/core';
import {AlumnosService} from '../alumnos.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title='SistemaEscolar';

  alumnos=null;
 
   alumno={
    Matricula: null,
         Nombres:null,
          Apellido_Paterno: null,
          Apellido_Materno: null,
          Edad:null
   }
   constructor(private alumnosServicio:AlumnosService,private router: Router, private route: ActivatedRoute ){
    // console.log(this._route.snapshot.paramMap.get('id'));
   }
    ngOnInit(){
       this.obtenerAlumnos();
     //  let id = +this._route.snapshot.paramMap.get('id');
     }
     obtenerAlumnos(){
       this.alumnosServicio.getAlumnos().subscribe(
         result =>this.alumnos = result
       );
     }
  
     bajaAlumnos(Matricula){
       this.alumnosServicio.deleteAlumno(Matricula).subscribe(
         datos =>{
           if(datos['resultado']=='OK'){
             alert(datos['mensaje']);
             this.obtenerAlumnos();
           }
         }
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
     seleccionarAlumno(Matricula){
       this.alumnosServicio.getAlumno(Matricula).subscribe(
         result =>this.alumno = result[0]
       );
     }
     existRegistros(){
       if(this.alumnos == null){
         return false;
       }else{
         return true;
       }
     }
     onCancel(){
      this.router.navigate(['./list'], {relativeTo: this.route});
     }
  
}
