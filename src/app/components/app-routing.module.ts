import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from  '../../app/components/home/home.component';
import {PredictorComponent} from '../../app/components/predictor/predictor.component';
import {StatisticsComponent} from '../../app/components/statistics/statistics.component';
import {GoalsComponent} from '../../app/components/goals/goals.component';
import {CentreComponent} from '../../app/components/centre/centre.component';
import {LoginComponent} from '../login/login.component'
import {Routes,RouterModule} from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ClusterComponent } from './cluster/cluster.component';
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'predictor',component:PredictorComponent},
  {path:'stats',component:StatisticsComponent},
  {path:'goals',component:GoalsComponent},
  {path:'login',component:LoginComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'cluster',component:ClusterComponent},
  {path:'exercise',component:StatisticsComponent},
  {path:'center',component:CentreComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

]

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
})
export class AppRoutingModule { }
