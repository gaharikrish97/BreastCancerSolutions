import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  log:string="true";
  sessionLog:string;
  title = 'Hackapp';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  logIn(){ 
    this.log="false";
    this.router.navigate(['/login']);
  }

  logOut(){
    sessionStorage.setItem('log',undefined);
    sessionStorage.setItem('globalEmail',undefined);
    console.log('Log');
    this.log="true";
    this.router.navigate(['/home']);
  }

}
