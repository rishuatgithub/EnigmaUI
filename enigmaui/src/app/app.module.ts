import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/nav.component';
import { HomeComponent } from './home/home.component';
import { TransformationComponent } from './transformation/transformation.component';
import { ScheduleComponent } from './scheduler/schedule.component';
import { ConfigComponent } from './configuration/config.component';
import { LogComponent } from './log/log.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    TransformationComponent,
    ScheduleComponent,
    ConfigComponent,
    LogComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
