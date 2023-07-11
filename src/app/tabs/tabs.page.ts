import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isNewProgram: boolean = false;
  isNewActus: boolean = false;
  isNewStates: boolean = false;
  isNewProfil: boolean = false;

  constructor() {}

}
