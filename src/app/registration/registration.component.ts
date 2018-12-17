import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  RegisterData: object;

  constructor() {
    this.RegisterData = {
      "numPref": "012",
      "gender": "male"
    };
  }

  ngOnInit() {
  }

  //=========== form validation function =============
  registerFunc(data: NgForm): void {
    if (data.valid) {
      // post request to save regiteration data object in database
      console.log(this.RegisterData);
    }
    else {
      console.log("data is not correct");
    }
  }
}
