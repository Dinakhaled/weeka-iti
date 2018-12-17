import { Component, OnInit , Input ,ViewChild,ElementRef} from '@angular/core';
import { NgModel } from '@angular/forms';
import { QueryService } from '../query.service';
import { starRatingColor } from 'angular-star-rating/src/interfaces/star-rating-config.interface';
import { transition } from '@angular/animations/src/animation_metadata';
import { validateConfig } from '@angular/router/src/config';



@Component({
  selector: 'app-meal-comment',
  templateUrl: './meal-comment.component.html',
  styleUrls: ['./meal-comment.component.scss']
})
export class MealCommentComponent implements OnInit {
  public comments: Array<object>;
  public newComment: object;
  public userComment: string;
  public userRate: number;
  public readonly = true;
  public mealRate:number;
  @Input('data') mealId :string;
  public p: number  ;
  collection: any[] = this.comments; 
  public items:number;
  public commented:boolean;
  @ViewChild ('myeditedCommemt') myeditedCommemt:ElementRef;
  @ViewChild ('myCommemt') myCommemt:ElementRef;
  public editMood:boolean;


  constructor(private q: QueryService) {
    this.comments = [];
    this.getComments();
    this.newComment = {};
    this.mealRate=0;
    this.p=1;
    this.items=3;
    this.commented=false;
    this.editMood=false;
  }


  //function to get comments from json file   

  getComments(): void {
    let path: string = '../../assets/meal-comment.json';
    this.q.getData(path).subscribe(
      res => {
        this.comments = res;
        // console.log(this.comments);
      },
      err => {
        console.log(err);
      }
    )
  }
  // function to add new comment

  addNewComment(): void {
    this.newComment['userComment'] = this.userComment;
    this.newComment['mealRate'] = this.userRate;
    this.newComment['mealId'] = this.mealId;
    this.newComment['userId'] = '6';

    this.comments.unshift(this.newComment);
    this.userComment = "";
    this.userRate = 0;
    this.commented=true;
    console.log(this.newComment);
  }

  //pagination function 
  update(){
    
    this.items=this.items+3;
  }
//delete user comment
deleteComment(){
  this.comments.shift();
  this.commented=false;
}
//edit user comment
editComment(){
  this.editMood=true;
}
// save edited comment
saveComment(){
 
  this.editMood=false;
  console.log(this.newComment);
}
  ngOnInit() {


  }

}
