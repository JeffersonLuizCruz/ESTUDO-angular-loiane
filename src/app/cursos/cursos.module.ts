import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  //@Ex-01
  // Esse metadato é importante quando cria um modulo separado.
  // É preciso que exista o Exports para importar seu component
  // para o restante do projeto. Lembrando que ao ser exportortado aqui
  // você terá que importar no app.module.ts
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
