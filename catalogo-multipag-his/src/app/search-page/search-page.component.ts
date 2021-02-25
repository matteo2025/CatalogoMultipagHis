import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  criterioRicerca: string;

  constructor(public mod: ModeratorService, private router: Router) { }

  ngOnInit(): void {
  }

  indietro() {
    this.router.navigateByUrl("/main-page");

  }

  cerca() { }

  elimina(i: number) {


  }
}
