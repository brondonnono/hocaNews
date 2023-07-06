import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FondComponent } from './fond.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FondComponent],
  exports: [FondComponent]
})
export class FondComponentModule {}
