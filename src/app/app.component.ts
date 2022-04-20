import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'projeto-estudos';
  inputText:string = '';
  salvaValor:string = '';
  isMouseOver:boolean = false;
  nome:string = 'Unidirecional';
  nome1:string = '';
  nomeCurso = 'Curso de Angular 2';

  clickAlert(): void{
    alert('Alerta');
  }

  onKeyUp1(event: any): void{
    console.log(event);
    this.inputText = event.target.value;
  }
  onKeyUp2(event: any): void{
    this.salvaValor = event;
  }

  onMouseOver(): void{
    this.isMouseOver = !this.isMouseOver;
  }
}
