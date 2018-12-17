import { Component, OnInit } from '@angular/core';
//service
import { TransferDataService } from '../transfer-data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  allMealCart:Set<any>;
  cookerName:String;
  confirmedMeals:Array<object>;
  totalOneMeal:number;
  totalAllMeals:number;
  constructor(private transfer:TransferDataService) {

    this.transfer.cast.subscribe(product => this.allMealCart = product );
    this.cookerName = 'محمد على';
    this.confirmedMeals = [];
    this.totalAllMeals = 0;
    this.chefMeals();
    this.calcTotalOneMeal();
    
   }

  ngOnInit() {
  }

  // check chef meals
  chefMeals():void{
    this.allMealCart.forEach(element => {
      if(element["cookerName"] == this.cookerName){
        this.confirmedMeals.push(element);
      }
    })
  }

  // calc total price for every meal
  calcTotalOneMeal():void{
    this.confirmedMeals.forEach(element => {
      this.totalOneMeal = (parseInt(element['qty']) * parseInt(element['mealPrice']));
      element["totalOneMeal"] = this.totalOneMeal;
      this.totalAllMeals = this.totalAllMeals + element["totalOneMeal"];
    })
  }

  //confirm order
  confirmOrder(id):void{
    this.confirmedMeals.forEach(element => {
      if(element['id']==id){
        let productIndex = this.confirmedMeals.indexOf(element);
        this.confirmedMeals.splice(productIndex,1);
       
      }
    })
  }

}
