import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Login} from '../model/login';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Register} from '../model/Register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login;
  loginStatus:string;
  registorStatus:any;
  public register:Register;

  constructor(private http: HttpClient,private router:Router,private snackBar:MatSnackBar) {
    this.login= new Login();
    this.register=new Register();
  }

  ngOnInit() {
  }

  registration(form:NgForm){
   
      console.log(form.value);
      this.register.EmailId=form.value.EmailId;
      this.register.Password=form.value.Password;
      console.log(this.register);
      this.http.post<any>('http://13.127.44.253:8080/Register', this.register).subscribe(result => {
        this.registorStatus=result.Response;
        console.log(this.registorStatus);
        });
    
    //this.registorStatus = "true";
    if(this.registorStatus==="Registered Successfully"){
      this.snackBar.open("Registration Done Successfully. Please Login !!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      this.router.navigate(['/home']);
      console.log(this.registorStatus);
    }
    else if(this.registorStatus=="false"){
      this.snackBar.open("Registration Failed. Please try again !!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      console.log(this.registorStatus);
    }
    else{
      this.snackBar.open("Registration Done Successfully. Please Login !!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      this.router.navigate(['/home']);
      console.log(this.registorStatus);
    }
  }


  loginValidation(form:NgForm){

    console.log(form.value);
    sessionStorage.setItem('globalEmail', form.value.UserName);
    this.http.post<any>('http://13.127.44.253:8080/Login', form.value).subscribe(result => {
      this.loginStatus=result.LoginResponse;
      });
    /*
      this.http.get<any>('http://13.127.181.228:8080/').subscribe(result => {
          this.loginStatus=result;
          console.log(result);
          });
*/

    if(this.loginStatus=="Login Successful"){
      sessionStorage.setItem('log', this.loginStatus);
      this.snackBar.open("Logged  In  Successfully !!!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      setTimeout(() => { this.router.navigate(['/home']); }, 500); //1000 for 1 sec waiter
      console.log(this.loginStatus);
    }

    else if(this.loginStatus=="Login Failed"){
      this.snackBar.open("Login failed. Please check the credentials !!!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      console.log(this.loginStatus);
    }

    else{
      this.snackBar.open("Logged  In  Successfully !!!",'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      setTimeout(() => { this.router.navigate(['/home']); }, 500); //1000 for 1 sec waiter
    }


    }

}
