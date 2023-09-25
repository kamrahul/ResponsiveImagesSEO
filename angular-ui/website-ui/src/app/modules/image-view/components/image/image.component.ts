import { Component, OnInit } from '@angular/core';
import { ScreenResolutionService } from 'src/app/services/screen-resolution.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private _resolutionService: ScreenResolutionService) { }

  ngOnInit(): void {
  }

  getCurrentResolution(): { width: number; height: number } {
    return this._resolutionService.getScreenResolution();
  }

  getImageUrl(){
    let screen_resoulution = this._resolutionService.getImageSize().size;
    let domain ="test.com"
    let image_url = "img.jpg"

    return domain+"/"+screen_resoulution+ "/"+image_url
  }


}
