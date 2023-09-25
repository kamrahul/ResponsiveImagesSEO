import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenResolutionService {

  constructor() { }

  getScreenResolution(): { width: number; height: number } {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  getImageSize() {

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    console.log(width)

    if ( width <= 500){
      console.log("Small");
      return {size:"small"};
    }

    else if ( width >= 500 && width <= 700){
      console.log("Medium");
      return {size:"medium"};
    }

    else if ( width > 700 ){
      console.log("large");
      return {size:"large"};
    }

    return {size:"Small"};
  }


}
