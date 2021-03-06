import { Component, OnInit, Input } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{


  website:string = 'http://jw.org';
  cursos:string[] = ['Java', 'Javascript', 'Python', 'C#'];
  pessoas:string[];
  @Input() nome:string = '';

  constructor(private cursosService:CursosService){
    this.pessoas = cursosService.getName();
  }
  ngOnInit(){}
}
