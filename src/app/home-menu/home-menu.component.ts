import { Component, OnInit, Input  } from '@angular/core';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  public areas: Array<object>;
  public selected:string;
  
 
  

  constructor(private q: QueryService, private menu: Router,private a:ActivatedRoute) {
    this.areas = [];
    this.selected=this.q.getArea()||'اختر منطقتك';
    
    
   }
   // function to get areas

   getAreas(): void {
    let path: string = '../../assets/home-menu.json';
    this.q.getData(path).subscribe(
      res => {
        this.areas = res;
       
      },
      err => {
        console.log(err);
      }
    )
  }
  // show selected item in button
   showItem(item:string){
    this.selected= item;
    this.q.setArea(item);
  
  } 

   // redirect to menu
   redirectToMenu(): void {
    this.menu.navigate(['/menu/'],{queryParams:{'المنطقة':this.selected}})

  }

  ngOnInit() {
  }

}
