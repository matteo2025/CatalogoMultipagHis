import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

 lista: Prodotto[]=[];

  constructor() { }
}
