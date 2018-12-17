import { Component, OnInit } from '@angular/core';
import {  StatisticsService } from '../statistics.service';
//=========== services ================
import { QueryService } from '../query.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cheaf-statistic',
  templateUrl: './chef-statistic.component.html',
  styleUrls: ['./chef-statistic.component.scss']
})
export class ChefStatisticComponent implements OnInit {
  chart = []; // This will hold chart info
  chart2 = []; // This will hold chart info
  constructor(private Q: QueryService,) { 

  }

  ngOnInit() {
    let mealNames =[];
    let mealRate =[];
    let yearMonths =[];
    let chefRate =[];
    let path: string = "./assets/meals-statistics.json";
    let path2: string = "./assets/chef-Rate.json";
      this.Q.getData(path)
        .subscribe(res => {
          let obj = res;
          for(let x in obj)
          {
            console.log(obj[x]);
            obj[x].forEach(element => {
              console.log(element.MealName)
              console.log(element.avgRate)
              mealNames.push(element.MealName)
              mealRate.push(element.avgRate)
            });
          } 
          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels:mealNames,
            
            datasets: [
              {
                label:"معدل تقييم الوجبات",
                data:mealRate,
                backgroundColor: 
                [
                  'rgba(170,1,20,1)',
                  'rgba(170,1,20,1)',
                  'rgba(170,1,20,1)',
                  'rgba(170,1,20,1)',
                  'rgba(234,211,168,1)',
                  'rgba(234,211,168,1)',
                  'rgba(234,211,168,1)',
                  'rgba(234,211,168,1)'
                ]
              }
            ]
          }
          });
        
      })



      this.Q.getData(path2)
        .subscribe(res => {
          let monthRate = res;
          console.log(res)
          for(let month in monthRate)
          {
             
              yearMonths.push(month);
              chefRate.push(monthRate[month]);
          } 
          this.chart2 = new Chart('canvas2', {
            type: 'line',
            data: {
              labels:yearMonths,
            
            datasets: [
              {
                label:"معدل تقييم الطباخ",
                data:chefRate,
                borderColor: "#000000",
                fill: false
              }
            ]
          }
          });
        
      })



  }
}
