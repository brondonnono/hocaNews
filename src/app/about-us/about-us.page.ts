import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  @ViewChild('mainSlides', { static: false }) mainSlides!: IonSlides;

  mainSlideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 5000,
  };
  constructor() { }

  ngOnInit() {
  }

}
