import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  listaFiltrata: Prodotto[] = [];
  criterioRicerca: string;
  visList: boolean = true;
  visListFiltrata: boolean = false;
  messaggioErrore = "nessun elemento trovato";
  visMessaggioErrore:boolean = false;
  constructor(public mod: ModeratorService, private router: Router) { }

  ngOnInit(): void {
  }

  indietro() {
    this.router.navigateByUrl("/main-page");

  }

  cerca() {
    this.visList = false;
    this.visListFiltrata = true;
    this.listaFiltrata = this.mod.lista;
    this.listaFiltrata = this.listaFiltrata.filter(p =>
      p.codice.toString().includes(this.criterioRicerca) ||
      p.descrizione.includes(this.criterioRicerca)
    );
    if(this.listaFiltrata.length < 1){
      this.visMessaggioErrore = true;
    }else{
      this.visMessaggioErrore = false;
    }
  }

  elimina(i: number) {
    this.mod.lista.splice(i, 1);
  }

  eliminaDopoFilter(p: Prodotto) {
    if (this.mod.lista.indexOf(p) != -1) {
      this.mod.lista.splice(this.mod.lista.indexOf(p), 1);
      this.listaFiltrata.splice(this.mod.lista.indexOf(p), 1);
    } else {
      console.log("elemento non trovato");
    }


  }
}
