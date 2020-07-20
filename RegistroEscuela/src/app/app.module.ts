import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AlumnosService } from './alumnos.service';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListComponent } from './list/list.component';
import { AlumnoEditComponent } from './alumno-edit/alumno-edit.component';



@NgModule({
  declarations: [
    AppComponent,NavComponent,FooterComponent,AlumnoDetailComponent, RegistrarComponent, ListComponent, AlumnoEditComponent],
   
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    AlumnosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
