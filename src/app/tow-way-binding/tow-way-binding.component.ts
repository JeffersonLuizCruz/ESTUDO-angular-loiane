import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tow-way-binding',
  templateUrl: './tow-way-binding.component.html',
  styleUrls: ['./tow-way-binding.component.css']
})
export class TowWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

pessoa:any = {
  nome:'Jefferson',
  idade:31
}

}
