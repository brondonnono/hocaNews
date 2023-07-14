import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages: any = [];
  
  constructor() {
    this.setMenuItem();
  }

  public setMenuItem(): any[] {
    return this.appPages = [
      { title: 'Programme de la semaine', url: '/app/tabs/tab1', icon: 'calendar' },
      { title: 'Actualités', url: '/app/tabs/news', icon: 'newspaper' },
      { title: 'Mes états', url: '/app/tabs/tab2', icon: 'bar-chart' },
      { title: 'Statut de l\'association', url: '/status', icon: 'journal' },
      { title: 'A propos', url: '/about-us', icon: 'information-circle' },
    ];
  }
}
