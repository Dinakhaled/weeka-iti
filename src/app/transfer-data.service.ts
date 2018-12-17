import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  private totalNum:number;
  private myFunc:Function;

  private data = new BehaviorSubject(new Set);

  //let me see data from any where
  cast = this.data.asObservable();

  constructor() { }

  // let me change on the data
  editData(newData){
    this.data.next(newData);
  }

  public setFunc(val: Function): void {
    this.myFunc = val;
  }

  public getFunc(): Function {
    return this.myFunc;
  }


}
