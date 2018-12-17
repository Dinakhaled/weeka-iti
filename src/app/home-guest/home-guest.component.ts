import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-home-guest',
  templateUrl: './home-guest.component.html',
  styleUrls: ['./home-guest.component.scss']
})
export class HomeGuestComponent implements OnInit {
  workData:Array<object>;
  constructor(private Q: QueryService) { 
    this.workData = [];
    this.getWorkData()
  }

  getWorkData():void{
    let path:string = "./assets/how-we-work.json";
    this.Q.getData(path).subscribe(
      res => {
        this.workData=res;
        console.log(this.workData)
      },
      err => { console.log(err) }
    );
  }

  ngOnInit() {
  }

}
