import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorService } from '../moderator.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {

  constructor(public mod:ModeratorService, private router:Router) { }

  ngOnInit(): void {
  }

  indietro(){
  this.router.navigateByUrl("/main-page");
  }
}
