import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public mod:ModeratorService, private router:Router) { }

  ngOnInit(): void {
  }

  elimina(i:number){}

  passaPaginaConta(){
    this.router.navigateByUrl("/count-page");
  }

  passaPaginaCerca(){
    this.router.navigateByUrl("/search-page");
  }
}
