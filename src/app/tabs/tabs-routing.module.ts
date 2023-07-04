import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { NewsPage } from '../news/news.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            component: Tab1Page
          },
          {
            path: 'activity/:activityId',
            loadChildren: () => import('../activity-detail/activity-detail.module').then(m => m.ActivityDetailPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            component: Tab2Page
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            component: Tab3Page
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            component: NewsPage
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
