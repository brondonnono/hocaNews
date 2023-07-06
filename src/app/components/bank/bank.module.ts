import { BankComponent } from './bank.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [BankComponent],
  exports: [BankComponent]
})
export class BankComponentModule {}
