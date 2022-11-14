import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})

export class GoalsComponent  {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { //you're missing this
      yAxes: [{
         scaleLabel: {
            display: true,
            labelString: 'Percentage %'
         }
      }],
      xAxes: [{
        scaleLabel: {
           display: true,
           labelString: 'Age Group'
        }
     }],

   }
  };
  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [25,36,78,54,33], label: 'Female' },
    { data: [19,67,54,3,44], label: 'Male' }
  ];
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  ngOnInit() {
    this.barChartLabels = ['0-10','10-30','30-50','50-80','80+'];
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
    type: 'line',
        
        data: {
          datasets: [{
            label: 'Male',
            
            borderColor: "blue",
            fill: true,
            data: [
             { x: "2000", y: "70" },
              { x: "2001", y: 40 },
              { x: "2002", y: 26 },
              { x: "2003", y: 90 },
              { x: "2004", y: 40 },
              { x: "2005", y:42 },
              { x: "2006", y: 78 },
              { x: "2007", y: 60 },
              { x: "2008", y: 36 },
             { x: "2009", y: "20" },
              { x: "2010", y: 40 },
              
            ],
          },{
          label: 'Female',
            
            borderColor: "red",
            fill: true,
            data: [
             { x: "2000", y: 89 },
              { x: "2001", y: 50 },
              { x: "2002", y: 20 },
              { x: "2003", y: 55 },
              { x: "2004", y: 65 },
              { x: "2005", y:39 },
              { x: "2006", y: 98 },
              { x: "2007", y: 31 },
              { x: "2008", y: 70 },
             { x: "2009", y: 80 },
              { x: "2010", y: 95 },
              
            ],
          }
  
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Last 10 Yearly Stats'
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              ticks: {
                max: 2010,
                  min: 2001,
                  stepSize: 1
              },
              scaleLabel: {
                labelString: 'Year',
                display: true,
              }
            }],
            yAxes: [{
              type: 'linear',
              ticks: {
                beginAtZero:false,
              },
              scaleLabel: {
                labelString: 'Percentage %',
                display: true
              }
            }]
          }
        }
      });
    }
  
}  
