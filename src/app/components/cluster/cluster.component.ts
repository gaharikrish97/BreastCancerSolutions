import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  category:any;
  email:string;
 
  constructor(private http: HttpClient,private router:Router) { 
  }

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];


  public barChartOptions: any = {
    legend: {
      display: false
  },
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { //you're missing this
      yAxes: [{
        ticks: {
          fontSize: 16,
          fontColor: '#000'
        },
         scaleLabel: {
            display: true,
            labelString: '%   of   People',
            fontSize:18,
            fontColor:'#000'
         }
      }],
      xAxes: [{
        barPercentage:0.6,
        ticks: {
          fontSize: 16,
          fontColor: '#000'
        },
        scaleLabel: {
           display: true,
           labelString: 'Clusters',
           fontSize:18,
           fontColor:'#000'
        }
     }],

   }
  };
  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  past_events:any;

  public data1:number[]=[91,36,78,54,35];
 
  public barChartData: any[] = [
    { data: this.data1, label: 'Female' },
    
  ];
  
  ngOnInit() {
    this.email=sessionStorage.getItem('globalEmail');
    console.log(this.email);
    this.category=Math.floor(Math.random()*5);
    if(this.category=="0"){
      this.category="1";
    }
    this.category="Cluster-"+this.category;
    this.barChartLabels = ['Cluster-1','Cluster-2','Cluster-3','Cluster-4','Cluster-5'];
    this.event()
  }
  
  event_list = [
    {
     event:' Event 1',
     eventDescription:'Try lying on your unaffected side with your affected arm straight out, above the level of your heart(Use pillow if you need)',
     img: '../assets/cluster1/1.jpg',
     eventStartDate: new Date('2019/07/28'),
     eventEndingDate: new Date('2019/07/30')
   },
    {
     event:' Event 2',
     eventDescription:'Slowly open and close your hand, repeat 15 to 25 times',
     img: '../assets/cluster1/2.jpg',
     eventStartDate: new Date('2020/05/20'),
     eventEndingDate: new Date('2020/05/24')
   },
   {
    event:' Event 3',
    eventDescription:'Then slowly bend and straighten your elbow. Repeat 15 to 25 times.',
    img: '../assets/cluster1/3.jpg',
    eventStartDate: new Date('2018/05/20'),
    eventEndingDate: new Date('2018/05/24')
  },
 ]
 ///
 event_list1 = [
  {
   event:' Event 1',
   eventDescription:'Lift both shoulders up towards your ears.Hold for 5-10 seconds and gently drop them.Repeat 5-10 times',
   img: '../assets/cluster2/1.jpg',
   eventStartDate: new Date('2019/07/28'),
   eventEndingDate: new Date('2019/07/30')
 },
  {
   event:' Event 2',
   eventDescription:'Gently rotate both shoulders forward and up and then slowly back and down,making a circle',
   img: '../assets/cluster2/2.jpg',
   eventStartDate: new Date('2020/05/20'),
   eventEndingDate: new Date('2020/05/24')
 },
 {
  event:' Event 3',
  eventDescription:'Switch and repeat in opposite direction.Repeat it 5-10 times',
  img: '../assets/cluster2/3.jpg',
  eventStartDate: new Date('2018/05/20'),
  eventEndingDate: new Date('2018/05/24')
},
]
//
event_list2 = [
  {
   event:' Event 1',
   eventDescription:'Clasp your hands in front of your chest.Point youe elbows out.',
   img: '../assets/cluster3/1.jpg',
   eventStartDate: new Date('2019/07/28'),
   eventEndingDate: new Date('2019/07/30')
 },
  {
   event:' Event 2',
   eventDescription:'Slowly lift your arms up until you feel a gentle stretch.Hold for 1-2 seconds',
   img: '../assets/cluster3/2.jpg',
   eventStartDate: new Date('2020/05/20'),
   eventEndingDate: new Date('2020/05/24')
 },

]
////////////
event_list3 = [
  {
   event:' Event 1',
   eventDescription:'Lie on your back with knees bentHold your wand with both wands,shoulder a width apart.',
   img: '../assets/cluster4/1.jpg',
   eventStartDate: new Date('2019/07/28'),
   eventEndingDate: new Date('2019/07/30')
 },
  {
   event:' Event 2',
   eventDescription:'Lift the wand over your head as far as you can feel a gentle atretch.Hold for 1-2 seconds and drop them.',
   img: '../assets/cluster4/2.jpg',
   eventStartDate: new Date('2020/05/20'),
   eventEndingDate: new Date('2020/05/24')
 },

]

 //upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
 event(){
   if(this.category=="Cluster-1"){
 this.past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
   }
   else if(this.category=="Cluster-2"){
    this.past_events = this.event_list1.filter(event => event.eventEndingDate < new Date());
   }
   else if(this.category=="Cluster-3"){
    this.past_events = this.event_list2.filter(event => event.eventEndingDate < new Date());
   }
   else if(this.category=="Cluster-4"){
    this.past_events = this.event_list3.filter(event => event.eventEndingDate < new Date());
   }
   else if(this.category=="Cluster-5"){
    this.past_events = this.event_list2.filter(event => event.eventEndingDate < new Date());
   }
 //current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))
 }



 callExercise(){
  this.router.navigate(['/exercise']);
 }

}
