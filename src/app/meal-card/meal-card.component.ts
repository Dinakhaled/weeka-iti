import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//=========== services ================
import { QueryService } from '../query.service';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent {

  mealData: Array<object>;

  constructor(private Q: QueryService,
    private toSingleView: Router) {

    this.mealData = [];
    this.getMealData()
  }

  //function to get meal data from json file   
  getMealData(): void {
    let path: string = "./assets/meal-card.json";
    this.Q.getData(path).subscribe(
      res => {
        this.mealData = res;
        console.log(this.mealData)
      },
      err => { console.log(err) }
    );
  }


}
