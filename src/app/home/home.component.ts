import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  student = {
    name : 'saravanan',
    age : 20
  }

  

  ngOnInit(): void {
    console.log("Student ==========>",this.student.name)
  }
  action(){
    console.log("Clicked button")
  }

}