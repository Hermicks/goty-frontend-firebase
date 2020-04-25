import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Gráficas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Componentes del módulo
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
