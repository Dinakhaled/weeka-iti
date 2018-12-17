import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { NgForm, NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  allData: Array<any>;
  userData: object;
  editFlag: boolean;
  closeResult: string;
  editedPass: object;

  constructor(private query: QueryService,
    private modalService: NgbModal) {
    this.allData = [];
    this.userData = {};
    this.getUserData();
    this.editFlag = false;
    this.editedPass = {};
  }

  ngOnInit() { }

  //============ get data from json file ==========
  getUserData(): void {
    let path: string = "../../assets/user-info.json";
    this.query.getData(path).subscribe(
      res => {
        this.allData = res;
        console.log(this.allData);
        this.checkUser();
      },
      err => { console.log(err) }
    );
  }

  // ========== accessing single product from all products ========
  checkUser(): void {
    for (let user of this.allData) {
      this.userData = user;
    }
  }

  editInfo(): void {
    this.editFlag = !this.editFlag;
  }

  //=========== form validation function =============
  editFunc(data: NgForm): void {
    if (data.valid) {
      // post request to update cooker data object in database
      console.log(this.userData);
      if (this.userData["gender"] == 'female') {
        this.userData["gender"] = "أنثي";
      }
      if (this.userData["gender"] == 'male') {
        this.userData["gender"] = "ذكر";
      }
      this.editFlag = !this.editFlag;
    }
    else {
      console.log("data is not correct");
    }
  }

  // ================== modal function ===================
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

  // ============= change password function ===============
  saveChanges(data: NgForm): void {
    if (data.valid) {
      //========== request update password ===========
      console.log(this.editedPass);
      this.editedPass["oldPass"] = "";
      this.editedPass["newPass"] = "";
      this.editedPass["newPass2"] = "";

    } else {
      console.log('error');
    }
  }

}
