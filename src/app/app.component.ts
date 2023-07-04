import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages: any = [];
  
  constructor() {}

  public setMenuItem(): any[] {
    return this.appPages = [
      { title: 'Programme', url: '/app/tabs/tab1', icon: 'calendar' },
      { title: 'history', url: '/history', icon: 'book' },
      { title: 'Actualités', url: '/app/tabs/news', icon: 'news' },
      { title: 'Mes états', url: '/app/tabs/tab2', icon: 'bar-chart' },
      { title: 'Statut de l\'association', url: '/status', icon: 'info' },
      { title: 'A propos', url: '/about', icon: 'infos' },
    ];
  }
}
