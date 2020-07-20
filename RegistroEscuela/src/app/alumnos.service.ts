import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from "../environments/environment"
import { Subject } from 'rxjs';
const PROTOCOL = 'http';
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private baseURL:string;
  private port:string = "80";
 // URL = "http://localhost/api/";

  
 constructor(private httpClient:HttpClient) { 
  this.baseURL=`${PROTOCOL}://${location.hostname}:${this.port}/EscuelaPrueba/API/`;
 };

  getAlumnos(){
    return this.httpClient.get(this.baseURL+'select.php');
    
  }
  addAlumno(alumno){
   // return this.httpClient.post(this.baseURL+'insert.php',JSON.stringify(alumno));
   return this.httpClient.post(`${this.baseURL}insert.php`, JSON.stringify(alumno));
  }
  deleteAlumno(Matricula:number){
    //return this.httpClient.get(this.baseURL+'delete.php?Matricula=${matricula}');
    return this.httpClient.get(`${this.baseURL}delete.php?Matricula=${Matricula}`);
  }
  getAlumno(Matricula:number){
    //return this.httpClient.get(this.baseURL+'SelectById.php?Matricula=$Matricula');
    return this.httpClient.get(`${this.baseURL}SelectById.php?Matricula=${Matricula}`);
  }
  
    updateAlumno(alumno){
     // return this.httpClient.post(this.baseURL+'update.php',JSON.stringify(alumno));
     return this.httpClient.post(`${this.baseURL}update.php`, JSON.stringify(alumno));
    }
   

  }

