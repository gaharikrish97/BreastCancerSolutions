import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  sign:FormGroup;
  selectedCountry: string;
  country:any[]=['India']
  state:any[]=['Tamilnadu','Punjab']
  city:any[]=['Chennai','Ludhiana']
  settings:any
  val:any;
  tab:any;
  ngOnInit(){

    this.sign = new FormGroup({
      country:new FormControl(),
      state:new FormControl(),
      city:new FormControl()
    })
  
  this.settings = {
    singleSelection: true,
    
    maxHeight: 197,
    
  };
}
onSubmit(){
  console.log(this.sign.value.state[0])
 if (this.sign.value.state[0]=='Tamilnadu'){
   this.tab=true;
 }
  else if(this.sign.value.state[0]=='Punjab'){
    this.tab=false;

 }
}
}
