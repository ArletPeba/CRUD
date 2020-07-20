export class Alumno {
    public matricula: number;
    public nombres: string;
public apellido_paterno: string;
public apellido_materno: string;
public edad: number;
    constructor(matricula:number, nombres:string, apellido_paterno:string, apellido_materno:string, edad:number)
     { 
         this.matricula=matricula;
         this.nombres=nombres;
         this.apellido_paterno=apellido_paterno;
         this.apellido_materno=apellido_materno;
         this.edad=edad;
     }
}