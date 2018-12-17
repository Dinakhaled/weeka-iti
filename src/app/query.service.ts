import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { starRatingColor } from 'angular-star-rating/src/interfaces/star-rating-config.interface';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private area: string;

  constructor(private http: HttpClient) {
  }

  getData(path: string): Observable<any> {
    return this.http.get(path);
  }
  setArea(val: string) {
    this.area = val;

  }
  getArea() {
    return this.area;
  }

}
