import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public mod: ModeratorService, private router: Router) { }

  ngOnInit(): void {
  }

  elimina(i: number) {
    this.mod.lista.splice(i, 1);
  }

  passaPaginaConta(n: string) {
    this.router.navigateByUrl("/count-page");
  }

  passaPaginaCerca(a: string) {
    this.router.navigateByUrl("/search-page");
  }

  aggiungi(p: Prodotto) {
    this.mod.lista.push(p);
  }
}
