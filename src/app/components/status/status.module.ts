import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StatusComponent } from './status.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [StatusComponent],
  exports: [StatusComponent]
})
export class StatusComponentModule {}
