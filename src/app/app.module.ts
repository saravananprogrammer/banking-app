import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CoreTableComponent } from './components/core/core-table/core-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableComponent } from './components/core/mat-table/mat-table.component';
import {FormsModule} from '@angular/forms'
import { InputsModule } from '@progress/kendo-angular-inputs';
import { WellOperationPageComponent } from './well-operation-page/well-operation-page.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressComponent } from './components/address/address.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';

//import { AddressComponent } from './component/address/address.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreTableComponent,
    MatTableComponent,
    WellOperationPageComponent,
    AddressListComponent,
    AddressComponent,
    GalleryComponent,
    GalleryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    FormsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
