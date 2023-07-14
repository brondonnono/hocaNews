import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() { }

  autoplay = {
    delay: 7000,
  };

  actionWhenLast() {
    let isEnd = this.swiperRef?.nativeElement.swiper.isEnd;
    if (isEnd == true) { } else { }
  }

}
