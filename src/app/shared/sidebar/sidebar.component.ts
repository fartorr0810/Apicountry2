import { Component, OnInit } from '@angular/core';
import { PaisServicio } from 'src/app/pais/servicios/pais-servicio.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicio:PaisServicio) { }

  ngOnInit(): void {
  }
  addBusqueda(event:any):void{
    if(event.keyCode=="13"){
      this.servicio.buscarPaises(event.target.value);
    }
  }
}
