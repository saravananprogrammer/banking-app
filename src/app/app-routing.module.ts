import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import {WellOperationPageComponent} from '../app/well-operation-page/well-operation-page.component'
import { AddressListComponent} from './address-list/address-list.component'

const routes: Routes = [


  { path:'', component :AddressListComponent },
  { path:'home', component :HomeComponent },
  { path:'wellpage', component :WellOperationPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
