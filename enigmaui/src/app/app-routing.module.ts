import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TransformationComponent } from './transformation/transformation.component';
import { ScheduleComponent } from './scheduler/schedule.component';
import { ConfigComponent } from './configuration/config.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'transformation', component: TransformationComponent },
  { path: 'scheduler', component: ScheduleComponent },
  { path: 'configuration', component: ConfigComponent}, 
  { path: 'log', component: LogComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
