import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartComponent } from '../cart/cart.component';

// ============= service ==============
import { QueryService } from '../query.service';
import { TransferDataService } from '../transfer-data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @ViewChild(CartComponent) child:CartComponent;

  singleName: string;
  singleData: object;
  mealData: Array<any>;
  allCartMeals:Set<any>;
  constructor(private active: ActivatedRoute,
    private query: QueryService,
    private transfer:TransferDataService) {
    this.singleData = {};
    this.mealData = [];
    this.allCartMeals = new Set();   
    this.getMealData();
    
    // ========= accessing name comes from url ===========    
    this.active.params.subscribe(
      params => this.singleName = (params.name).replace(/%20/g, ' ')
    );

  }
  //============ get data from json file ==========
  getMealData(): void {
    let path: string = "../../assets/meal-card.json";
    this.query.getData(path).subscribe(
      res => {
        this.mealData = res;
        this.checkMeal();
      },
      err => { console.log(err) }
    );
  }

  // ========== accessing single product from all products ========
  checkMeal(): void {
    for (let meal of this.mealData) {
      if (meal.mealTitel == this.singleName) {
        this.singleData = meal;
      }
    }
  }

  //============ Add To Cart ==========
  addToCart():void{
      
      this.allCartMeals.forEach(element => {
        if(element["id"] == this.singleData['id']){
          element['qty'] = parseInt(element['qty']) + 1;
        }
      });
      this.allCartMeals.add(this.singleData);
    
      this.child.totalOneMeal = 0;
      this.child.addPrice();
  }
  ngOnInit() {
    //listen to data from the service
    this.transfer.cast.subscribe(product => this.allCartMeals = product);
  }


}
