import { PresenceComponent } from './presence.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PresenceComponent],
  exports: [PresenceComponent]
})
export class PresenceComponentModule {}
