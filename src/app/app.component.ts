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

  clickButton(){
    alert('Alerta');
  }

  onKeyUp1(event: any){
    console.log(event);
    this.inputText = event.target.value;
  }
  onKeyUp2(event: any){
    this.salvaValor = event;
  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver;
  }
}
