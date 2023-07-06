import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizePageRoutingModule } from './visualize-routing.module';

import { VisualizePage } from './visualize.page';
import { BankComponentModule } from '../components/bank/bank.module';
import { FondComponentModule } from '../components/fond/fond.module';
import { OrderComponentModule } from '../components/order/order.module';
import { PresenceComponentModule } from '../components/presence/presence.module';
import { StateComponentModule } from '../components/state/state.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankComponentModule,
    OrderComponentModule,
    StateComponentModule,
    PresenceComponentModule,
    FondComponentModule,
    VisualizePageRoutingModule
  ],
  declarations: [VisualizePage]
})
export class VisualizePageModule {}
