import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-operation-page',
  templateUrl: './well-operation-page.component.html',
  styleUrls: ['./well-operation-page.component.css']
})
export class WellOperationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  action(){
    console.log("Clicked button")
  }
}
