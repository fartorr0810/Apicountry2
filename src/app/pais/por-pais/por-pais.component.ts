import { Component, OnInit } from '@angular/core';
import { PaisInterface,PaisDatosInterface } from '../interfaces/pais.interface.interface';
import { PaisServicio } from '../servicios/pais-servicio.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private serviciopais:PaisServicio) { }

  ngOnInit(): void {
  }
  obtenerpaises():PaisDatosInterface[]{
    return this.serviciopais.paises;
  }
}
