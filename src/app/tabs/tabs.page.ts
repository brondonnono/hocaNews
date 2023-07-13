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
    this.newProgramNumber = this.utilityService.checkIsExistNewData("Program");
    this.newProfilNumber = this.utilityService.checkIsExistNewData("Profil");
    this.newActusNumber = this.utilityService.checkIsExistNewData("Actus");
    this.newStatesNumber = this.utilityService.checkIsExistNewData("States");

    if(this.newProgramNumber <= 0) {
      this.isNewProgram = false;
    } else {
      this.isNewProgram = true;
    }

    if(this.newProfilNumber == 0) {
      this.isNewProfil = false;
    } else {
      this.isNewProfil = true;
    }

    if(this.newActusNumber == 0) {
      this.isNewActus = false;
    } else {
      this.isNewActus = true;
    }

    if(this.newStatesNumber == 0) {
      this.isNewStates = false;
    } else {
      this.isNewStates = true;
    }
  }

}
