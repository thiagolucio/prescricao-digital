import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliciteCartaoComponent } from './solicite-cartao/solicite-cartao.component';
import {ConsultasMedicasComponent} from './consultas-medicas/consultas-medicas.component';
import {TelemedicinaComponent} from "./telemedicina/telemedicina.component";
import {MedicamentosComponent} from "./medicamentos/medicamentos.component";
import {LaudosMedicosComponent} from "./laudos-medicos/laudos-medicos.component";
import {ParceirosFranquiasComponent} from "./parceiros-franquias/parceiros-franquias.component";
import {AreaAcionistasComponent} from "./area-acionistas/area-acionistas.component";

const routes: Routes = [
  { path: 'soliciteCartao', component: SoliciteCartaoComponent },
  { path: 'consultasMedicas', component: ConsultasMedicasComponent },
  { path: 'telemedicina', component: TelemedicinaComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'laudosMedicos', component: LaudosMedicosComponent },
  { path: 'parceirosFranquias', component: ParceirosFranquiasComponent  },
  { path: 'areaAcionistas', component: AreaAcionistasComponent  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
