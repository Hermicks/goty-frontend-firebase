import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Módulo de Angularfire
import { AngularFireModule } from '@angular/fire';
// Módulo de Firestore
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos propios de la aplicación
import { ComponentsModule } from './components/components.module';

// Componentes de inicio de la aplicación
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
