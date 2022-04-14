import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  website:string = 'http://jw.org';
  pessoas:string[] = ['Jefferson', 'Hugo', 'Carol', 'Luiz'];
}
