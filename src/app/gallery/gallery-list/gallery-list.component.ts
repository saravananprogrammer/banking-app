import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
 
  @Input() gallery :any

  code :any =[];

  
  constructor() { }

  ngOnInit(): void {
      console.log("gallery==>",this.gallery)

      for(let i=0 ; i<this.gallery.length;i++){
        let val = `
        <div>
        <div class="image">
          <img src="../../assets/gallery/",${this.gallery[i]}>
          <button class="remove" (click)="removeItem(i,$event)">X</button>
        </div>
      </div>
     
      `
        this.code.push(val)
      }





  }
  removeItem(index:any,$event:any){

    this.gallery.splice(index,1)
    this.code.splice(index,1)
  }

  





}
