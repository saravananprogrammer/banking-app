import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryImage:any = ["firstimage.jpg","secondimage.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
