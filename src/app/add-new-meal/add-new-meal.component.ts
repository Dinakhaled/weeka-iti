import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { NgModel, NgForm } from '@angular/forms';
import { NgxCropperOption } from 'ngx-cropper';


@Component({
  selector: 'app-add-new-meal',
  templateUrl: './add-new-meal.component.html',
  styleUrls: ['./add-new-meal.component.scss']
})
export class AddNewMealComponent {
 public ngxCropperConfig: NgxCropperOption;

  onFileSelcted(event){
    console.log(event)
  }  
categories:Array<object>;
mealData:object;
afterPercentage:number;
  constructor(private q:QueryService) {
    this.categories = [];
    this.mealData = {};
    this. getCategories()
    this.afterPercentage = 0


    this.ngxCropperConfig = {
      url: "", // image server url
      maxsize: 512000, // image max size, default 500k = 512000bit
      title: 'Apply your image size and position', // edit modal title, this is default
      uploadBtnName: 'Upload Image', // default Upload Image
      uploadBtnClass:'upload-btn', // default bootstrap styles, btn btn-primary
      cancelBtnName: 'Cancel', // default Cancel
      cancelBtnClass: null, // default bootstrap styles, btn btn-default
      applyBtnName: 'Apply', // default Apply
      applyBtnClass: null, // default bootstrap styles, btn btn-primary
      fdName: 'file', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
      aspectRatio: 1 / 1, // default 1 / 1, for example: 16 / 9, 4 / 3 ...
      viewMode: 1 // default 0, value can be 0, 1, 2, 3
    };




   }


   public onReturnData(data: any) {
    // Do what you want to do
    console.log(JSON.parse(data));

   }


   getCategories():void{
    let path:string = '../../assets/categories.json';
    this.q.getData(path).subscribe(
      res => {
        this.categories = res;
        console.log(this.categories)
      },
      err => {
        console.log(err)
      }
    )
   }



   addNewMeal(data: NgForm): void {
    if (!data.valid) {
      console.log("error");
    }
    else {
      this.mealData = data.value;
      console.log(this.mealData);
      console.log(this.mealData['mealPrice']);
      let price =  this.mealData['mealPrice'];
      let Percentage =20;
      this.afterPercentage = price - ( price*Percentage/100 )
      console.log(this.afterPercentage)

    }
  }

}
