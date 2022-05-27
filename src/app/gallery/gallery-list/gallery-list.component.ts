import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
 
  @Input() gallery :any
  constructor() { }

  ngOnInit(): void {
    
  }
  removeItem(index:any){
    this.gallery.splice(index,1)
  }
}
