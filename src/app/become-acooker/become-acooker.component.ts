import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { QueryService } from '../query.service';
import { ArgumentOutOfRangeError } from 'rxjs/internal/util/ArgumentOutOfRangeError';
import { starRatingColor } from 'angular-star-rating/src/interfaces/star-rating-config.interface';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import {  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SrvRecord } from 'dns';
import { AnonymousSubject } from 'rxjs/internal/Subject';



@Component({
  selector: 'app-become-acooker',
  templateUrl: './become-acooker.component.html',
  styleUrls: ['./become-acooker.component.scss']
})
export class BecomeAcookerComponent implements OnInit {
  public cookerData: object;
  public areas: Array<object>;
  public user_tel_key:string;
  public user_area:string;
  public user_gender:string;
  public anotherArea:string;
  closeResult: string;
  
  constructor(private q: QueryService,private modalService: NgbModal) {
    this.cookerData = {  
    };
    this.areas = [];
    this.getAreas();
    this.user_tel_key='010';
    this.user_area='المنطقة';
    this.user_gender="male";
    // منطقة اخري 
    this.anotherArea="";
  }

  // pop up to get cooker area
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
onChange( event,d: any,a:string){
  if(a=="اخري"){
    this.open(d);

  }
}
  //function to get areas from json file   

  getAreas(): void {
    let path: string = '../../assets/become-acooker-areas.json';
    this.q.getData(path).subscribe(
      res => {
        this.areas = res;
        console.log(this.areas);
      },
      err => {
        console.log(err);
      }
    )
  }

  register(data: NgForm): void {
    if (!data.valid) {
      console.log("error");
      console.log(data);
    }
    else {

      this.cookerData = data.value;
      console.log(this.cookerData);
      console.log(data);

    }
  }

  ngOnInit() {
  }

}
