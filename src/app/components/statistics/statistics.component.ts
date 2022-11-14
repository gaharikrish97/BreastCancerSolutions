import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  email:string;
  value:any;
  track:string="false";
  constructor(private snackBar:MatSnackBar) {
    this.email=sessionStorage.getItem('globalEmail');
   }

  ngOnInit() {
    this.value=Math.floor(Math.random()*5);
    if(this.value=="0"){
      this.value=1;
    }
    if(this.email==undefined || this.email==null){
        this.track="false";
        console.log(this.track);
    }
    else this.track="true";
    console.log(this.email);
  }

  event_list = [
    {
     event:' Event 1',
     eventDescription:'Yoga can be an effective low impact exercise.',
     img: '../assets/exercise/1.jpg',
     eventStartDate: new Date('2019/07/28'),
     eventEndingDate: new Date('2019/07/30')
   },
    {
     event:' Event 2',
     eventDescription:'Walk daily for atleast half an hour is recommended.',
     img: '../assets/exercise/2.jpg',
     eventStartDate: new Date('2020/05/20'),
     eventEndingDate: new Date('2020/05/24')
   },
   {
    event:' Event 3',
    eventDescription:'Self examine: Lumps or Thickening in underarm/breast.',
    img: '../assets/exercise/3.jpg',
    eventStartDate: new Date('2018/05/20'),
    eventEndingDate: new Date('2018/05/24')
  },
  {
    event:' Event 4',
    eventDescription:'Regorous activity for atleast half an hour a day.',
    img: '../assets/exercise/4.jpg',
    eventStartDate: new Date('2019/07/28'),
    eventEndingDate: new Date('2019/07/30')
  }
 ]


past_events = this.event_list.filter(event => event.eventEndingDate < new Date());


checkExerciseStatus(form:NgForm){
  console.log(form.value);
  if(form.value.exercise==""){
    this.snackBar.open("Please select Yes or No !!!",'',{
      duration:2000,
      verticalPosition:'bottom'
    });
  }
  else location.reload();
  
  }


}
