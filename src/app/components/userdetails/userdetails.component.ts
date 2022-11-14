import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  data:any;
  settings:any;
  value:string;
  EmailId:string;
  HttpResponse:string;
  Pregnant:any;
  DiagnosticTest:any;
  options:any;

  constructor(private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.data = [
      "Lump in the breast","Thickening or swelling in breast","Lump in underarm(armpit)","Pain in breast","Irritation of breast skin","Change in shape or size of breast","Pain in nipple or in its area","Pulling in of the nipple",
      "Nipple discharge including blood","backbone pain"
    ];
    
    this.settings = {
      singleSelection: false,
      
      allowSearchFilter: true,
      
      clearSearchFilter: true,
      maxHeight: 150,
      itemsShowLimit: 1
    
    };

    this.EmailId = sessionStorage.getItem('globalEmail');
    //this.HttpResponse http check email get
    this.HttpResponse="true";
    if(this.HttpResponse=="true"){
        this.value="true";
    }
    else if(this.HttpResponse=="false"){
      this.value="false";
    }
    else console.log('');

  }

  userDetails(form:NgForm){
    console.log(JSON.stringify(form.value));
    if(form.value.Name=="" || form.value.Age=="" || form.value.Weight==""){
      this.snackBar.open("Please fill all fields !!!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
    }
    //http post user details
    else this.router.navigate(['/cluster']);
  }

}



