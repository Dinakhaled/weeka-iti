import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private _http: HttpClient) {
    
   }
   getStatistics() {
    return this._http.get('../assets/statistics.json')
  }
}
