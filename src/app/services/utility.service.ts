import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  checkIsExistNewData(type: string) {
    let result: number;
    switch (type) {
      case "Program":
        return this.getNewDataSize(type);
        break;

      case "Profil":
        return this.getNewDataSize(type);
        break;

      case "Actus":
        return this.getNewDataSize(type);
        break;

      case "States":
        return this.getNewDataSize(type);
        break;
    }
    return -1;
  }

  getNewDataSize(type: string) {
    switch (type) {
      case "Program":
        return 4;
        break;

      case "Profil":
        return 1;
        break;

      case "Actus":
        return 4;
        break;

      case "States":
        return 5;
        break;
    }
    return -1;
  }
}