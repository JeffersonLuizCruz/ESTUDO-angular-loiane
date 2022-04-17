import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  url:string = 'http:www.teste.com.br';
  cursoAngular: boolean = true;
  urlImg:string = 'https://loremflickr.com/640/360';

  getCurtirCursoangular(){
    return true;
  }
  getDolar(){
    return 4.45;
  }

  ngOnInit(): void {
  }

}
