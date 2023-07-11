import { Component } from '@angular/core';
import { UtilityService } from '../services/utility.service';

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

  newProgramNumber: number = 0;
  newActusNumber: number = 0;
  newProfilNumber: number = 0;
  newStatesNumber: number = 0;

  constructor(private utilityService: UtilityService) {
    for (const type in ["Program", "Profil", "Actus", "States"]) {
      let value = this.utilityService.checkIsExistNewData(type);
      if (value != 0) {
        switch (type) {
          case "Program":
            this.isNewProgram = true;
            this.newProgramNumber = value;
            break;

          case "Profil":
            this.isNewProfil = true;
            this.newProfilNumber = value;
            break;

          case "Actus":
            this.isNewActus = true;
            this.newActusNumber = value;
            break;

          case "States":
            this.isNewStates = true;
            this.newStatesNumber = value;
            break;
        }
      } else {
        switch (type) {
          case "Program":
            this.isNewProgram = false;
            break;

          case "Profil":
            this.isNewProfil = false;
            break;

          case "Actus":
            this.isNewActus = false;
            break;

          case "States":
            this.isNewStates = false;
            break;

          default:
            break;
        }
      }
    }
  }

}
