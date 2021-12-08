import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { PaisServicio } from './servicios/pais-servicio.service';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent
  ],
  providers:[
    PaisServicio
  ]
})
export class PaisModule { }
