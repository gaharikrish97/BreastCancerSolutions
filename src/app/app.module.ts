import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PredictorComponent } from './components/predictor/predictor.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AppRoutingModule } from './components/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CentreComponent } from './components/centre/centre.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ClusterComponent } from './components/cluster/cluster.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PredictorComponent,
    StatisticsComponent,
    GoalsComponent,
    
    CentreComponent,
    
    LoginComponent,
    
    UserdetailsComponent,
    
    ClusterComponent,
    
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatButtonModule, 
    AppRoutingModule,MatIconModule,BrowserAnimationsModule,
    FormsModule,ChartsModule,MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    NgMultiSelectDropDownModule,HttpClientModule,NgbModule,
    MatSnackBarModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
