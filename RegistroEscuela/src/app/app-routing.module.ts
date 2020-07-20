import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListComponent } from './list/list.component';
import { AlumnoEditComponent } from './alumno-edit/alumno-edit.component';

const routes: Routes = [
//{path: 'list', component: ListComponent},
{path: 'list', component:ListComponent},
{path: 'registrar', component: RegistrarComponent},
{path: 'list/:id', component:AlumnoDetailComponent},
{path: 'edit/:id', component:AlumnoEditComponent},
//{path: 'alumno/:matricula', component: AlumnoDetailComponent},
{path:'', redirectTo:'/list', pathMatch:'full'}
//{path:'**',component:PageNotFoundComponent}
 // {path: "alumnos/agregar", component: AgregarAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
