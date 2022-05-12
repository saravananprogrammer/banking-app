import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CoreTableComponent } from './components/core-table/core-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableComponent } from './components/mat-table/mat-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreTableComponent,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
