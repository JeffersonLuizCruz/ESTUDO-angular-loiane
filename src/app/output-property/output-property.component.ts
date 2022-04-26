import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  @Input() mudaValor: number = 0;
  @Output() eventoMudouValor = new EventEmitter();

  ngOnInit(): void {
  }

  incrementa(): void {
    this.valor++;
    this.eventoMudouValor.emit({novoValor: this.valor});
  }

  decrementa(): void{
    this.valor--;
  }

}
