import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { starRatingColor } from 'angular-star-rating/src/interfaces/star-rating-config.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public area:string;

  constructor() {
    
   }

  ngOnInit() {
  }

}
