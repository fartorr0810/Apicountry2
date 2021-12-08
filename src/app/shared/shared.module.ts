import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaisServicio } from '../pais/servicios/pais-servicio.service';
@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers: [
    PaisServicio
  ]
})
export class SharedModule { }
