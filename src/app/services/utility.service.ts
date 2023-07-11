import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  checkIsExistNewData(type: string) {
    let result = 0;
    switch (type) {
      case "Program":
        result = this.getNewDataSize(type);
        break;

      case "Profil":
        result = this.getNewDataSize(type);
        break;

      case "Actus":
        result = this.getNewDataSize(type);
        break;

      case "States":
        result = this.getNewDataSize(type);
        break;

      default:
        result = 0;
        break;
    }
    return result;
  }

  getNewDataSize(type: string) {
    let result = 0;
    switch (type) {
      case "Program":
        result = 1;
        break;

      case "Profil":
        result = 2;
        break;

      case "Actus":
        result = 3;
        break;

      case "States":
        result = 4;
        break;

      default:
        result = 0;
        break;
    }
    return result;
  }
}
