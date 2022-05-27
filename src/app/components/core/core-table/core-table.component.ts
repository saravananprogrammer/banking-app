import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder,NgForm } from '@angular/forms';
import {  MatTableDataSource } from '@angular/material/table';  


export interface PeriodicElement {

  seq: number;
  event_date: string;
  Qualifier:string;
  event_type:string

  // weight : number;
  // symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [

  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
  {seq: 1, event_date:'ww', Qualifier:"yes",event_type:"bankapp"},
 
 
];


@Component({
  selector: 'app-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.css']
})
export class CoreTableComponent implements OnInit {

  // form: FormGroup;

 

  displayedColumns: string[] = ['seq', 'event_date', 'Qualifier', 'event_type'];
  dataSource = ELEMENT_DATA;




  constructor() { }

  ngOnInit(): void {
    //this.displayedColumns = ['Seq','Event Date']
    
  }

}
