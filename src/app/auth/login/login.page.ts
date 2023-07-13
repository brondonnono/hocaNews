import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credentials = { email: '', password: '' };
  public eyeMode = 'open';
  public submitted = false;
  public isActiveToggleTextPassword = true;
  public errorMessages = { username: '', password: '' };
  public isLoading = false;
  private isLogin = true;

  constructor(
    public menu: MenuController
  ) { }

  ngOnInit() { }

  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  public ionViewWillEnter(): void {
    this.menu.enable(false);
  }

  public ionViewWillLeave(): void {
    this.menu.enable(true);
  }

  public showPassword(): void {
    switch (this.isLogin) {
      case true:
        if (this.eyeMode === 'open') {
          this.isActiveToggleTextPassword = false;
          this.eyeMode = 'close';
        } else {
          this.isActiveToggleTextPassword = true;
          this.eyeMode = 'open';
        }
        break;
      
      case false:
        if (this.eyeMode === 'open') {
          this.isActiveToggleTextPassword = false;
          this.eyeMode = 'close';
        } else {
          this.isActiveToggleTextPassword = true;
          this.eyeMode = 'open';
        }
        break;
      
      default:
        break;
    }
  }

}
