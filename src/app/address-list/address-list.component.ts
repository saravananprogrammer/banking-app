import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  address:any;
  constructor() { }

  ngOnInit(): void {
    this.address = [{ street: "Third Avenue‎", city: "New York", zipCode: "10001" },
    { street: "Constitution Avenue", city: "Washington", zipCode: "20001" }]
   
  }

}
