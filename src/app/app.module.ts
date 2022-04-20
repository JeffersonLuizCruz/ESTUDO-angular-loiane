import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { TowWayBindingComponent } from './tow-way-binding/tow-way-binding.component';

@NgModule({
  declarations: [
    // Aqui eu declaro meus componentes criado pelo CLI ng g c nome_componente
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiro2Component,
    DataBindingComponent,
    TowWayBindingComponent,
  ],
  imports: [
    // Aqui eu importo os módulos criado pelo CLI ng g m nome_modulo
    // Também importamos módulos do angular
    BrowserModule,
    //@Ex-01
    // Esse importe pertence ao modulo curso.module.ts
    CursosModule,
    AppBootstrapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
