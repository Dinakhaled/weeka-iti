import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

//service
import { QueryService } from '../query.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin:any; 
  checkUserFlage:boolean; 
  jsonData:Array<any>;
  constructor(private query:QueryService) {
    this.checkUserFlage = false; 
    this.userLogin = {
      "userEmail":"",
      "userPass":""
    }

    //get data
    this.getLoginData();
    
   }

  ngOnInit() {
  }

  //get our user data to check
  getLoginData(): void {
    const myPath = '../assets/data/login-check.json';
    this.query.getData(myPath).subscribe(
      res => {
        this.jsonData = res;
      },
      err => {
        console.log(err);
      }
    );
  }


  loginData(userData:NgForm):void{
    if(userData.valid && !userData.controls.userEmail.errors){
      for (const member of this.jsonData){      
        if ( member.userEmail === this.userLogin.userEmail && member.userPass === this.userLogin.userPass ){          
          console.log('you are a member'); 
          this.checkUserFlage = false;  
          break;        
        }else{
          console.log('not a member');
          this.checkUserFlage = true;
        }
      }
    }else{
    
    }
  }

}
