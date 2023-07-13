import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

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

  async loading() {
    const load = await this.loadingCtrl.create({
      message: 'Patientez...',
      mode: 'ios',
      spinner: 'circular'
    });
    await load.present();
  }

  async dismiss() {
    this.loadingCtrl.dismiss();
  }

  async presentToastMessage(message: string) {
    const toast = await this.toastCtrl.create({
      header: message,
      position: 'top',
      duration: 5000,
      buttons: [{
        text: 'fermer',
        role: 'cancel'
      }]
    });

    // Present the toast at the top of the page
    await toast.present();
  }

  async presentAlertMessage(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Informations',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
