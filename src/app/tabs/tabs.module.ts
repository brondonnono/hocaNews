import { ActivityDetailPageModule } from './../activity-detail/activity-detail.module';
import { Tab1PageModule } from './../tab1/tab1.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab3PageModule } from '../tab3/tab3.module';
import { ActualityPageModule } from '../actuality/actuality.module';
import { NewsPageModule } from '../news/news.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    Tab1PageModule,
    Tab2PageModule,
    ActivityDetailPageModule,
    Tab3PageModule,
    ActualityPageModule,
    NewsPageModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
