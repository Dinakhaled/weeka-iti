import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryService } from '../query.service';
import { CartComponent } from '../cart/cart.component';

//Services
import { TransferDataService } from '../transfer-data.service';
@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  @ViewChild(CartComponent) cart:CartComponent;  

  historyMeals: Array<any>;
  allCartMeals:Set<any>;
  
  constructor(private q: QueryService, private transfer:TransferDataService) {
    this.historyMeals = [];
    this.getHistoryData();
  }

  ngOnInit() {
    this.transfer.cast.subscribe(product => this.allCartMeals = product);        
  }

  // ============== get data from server ===============
  getHistoryData(): void {
    let path = '../../assets/history.json';
    this.q.getData(path).subscribe(
      res => {
        this.historyMeals = res;
      },
      err => { console.log(err) }
    );
  }

  // ============== trigger order button ==============
  addToCartHistory(id){
    this.historyMeals.forEach(element => {
      
      if(element.id == id){
        this.allCartMeals.add(element);
      }
    })
    // this.child.totalOneMeal = 0;
    this.cart.addPrice();
    console.log(this.cart)
    console.log(this.allCartMeals)
  }
}
