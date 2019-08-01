import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SoliciteCartaoComponent } from './solicite-cartao/solicite-cartao.component';
import { HeaderSoliciteCartaoComponent } from './header-solicite-cartao/header-solicite-cartao.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderConsultaMedicaComponent } from './header-consulta-medica/header-consulta-medica.component';
import { ConsultasMedicasComponent } from './consultas-medicas/consultas-medicas.component';
import { HeaderTelemedicinaComponent } from './header-telemedicina/header-telemedicina.component';
import { TelemedicinaComponent } from './telemedicina/telemedicina.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { HeaderMedicamentosComponent } from './header-medicamentos/header-medicamentos.component';
import { LaudosMedicosComponent } from './laudos-medicos/laudos-medicos.component';
import { HeaderLaudosMedicosComponent } from './header-laudos-medicos/header-laudos-medicos.component';
import { ParceirosFranquiasComponent } from './parceiros-franquias/parceiros-franquias.component';
import { AreaAcionistasComponent } from './area-acionistas/area-acionistas.component';
import { HeaderParceirosFranquiasComponent } from './header-parceiros-franquias/header-parceiros-franquias.component';
import { ComboConsultasComponent } from './combo-consultas/combo-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SoliciteCartaoComponent,
    HeaderSoliciteCartaoComponent,
    FooterComponent,
    HeaderConsultaMedicaComponent,
    ConsultasMedicasComponent,
    HeaderTelemedicinaComponent,
    TelemedicinaComponent,
    MedicamentosComponent,
    HeaderMedicamentosComponent,
    LaudosMedicosComponent,
    HeaderLaudosMedicosComponent,
    ParceirosFranquiasComponent,
    AreaAcionistasComponent,
    HeaderParceirosFranquiasComponent,
    ComboConsultasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
