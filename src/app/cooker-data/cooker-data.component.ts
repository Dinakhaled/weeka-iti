import { Component, OnInit, Output } from '@angular/core';
import { QueryService } from '../query.service';
import { NgForm, NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cooker-data',
  templateUrl: './cooker-data.component.html',
  styleUrls: ['./cooker-data.component.scss']
})
export class CookerDataComponent implements OnInit {
  allData: Array<any>;
  cookerData: object;
  editFlag: boolean;
  closeResult: string;
  editedPass: object;

  constructor(private query: QueryService,
    private modalService: NgbModal) {

    this.allData = [];
    this.cookerData = {};
    this.getMealData();
    this.editFlag = false;
    this.editedPass = {};
  }

  ngOnInit() { }

  // ============ time picker ===============
  time = { hour: 13, minute: 30 };
  time2 = { hour: 18, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  //============ get data from json file ==========
  getMealData(): void {
    let path: string = "../../assets/cooker-info.json";
    this.query.getData(path).subscribe(
      res => {
        this.allData = res;
        console.log(this.allData);
        this.checkMeal();
      },
      err => { console.log(err) }
    );
  }

  // ========== accessing single product from all products ========
  checkMeal(): void {
    for (let cooker of this.allData) {
      this.cookerData = cooker;
    }
  }
  editInfo(): void {
    this.editFlag = !this.editFlag;
  }

  //=========== form validation function =============
  editFunc(data: NgForm): void {
    if (data.valid) {
      // post request to update cooker data object in database
      console.log(this.cookerData);
      if (this.cookerData["gender"] == 'female') {
        this.cookerData["gender"] = "أنثي";
      }
      if (this.cookerData["gender"] == 'male') {
        this.cookerData["gender"] = "ذكر";
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
