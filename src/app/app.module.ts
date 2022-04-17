import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiro2Component,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    //@Ex-01
    // Esse importe pertence ao modulo curso.module.ts
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
