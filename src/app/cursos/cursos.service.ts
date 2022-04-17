import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getName(){
    return ['Jeff', 'Hugo', 'Luiz', 'Cruz'];
  }
}
