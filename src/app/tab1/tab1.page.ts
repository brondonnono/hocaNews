import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Program } from '../models/models';
import { DateParserService } from '../services/date-parser.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('activityList', { static: true }) activityList!: IonList;
  
  showActivity: boolean = false;
  programs: Program[] = [
    {
      id: '1',
      date: '07/04/2023',
      listActivities: [
        {
          id: 'string',
          title: 'string',
          date: 'string',
          timeStart: 'string',
          timeEnd: 'string',
          location: 'string',
          description: 'string',
          organisation_code: 'string',
          initiator_user_id: 'string',
          created_at: 'string',
          updated_at: 'string'
        },
        {
          id: 'string',
          title: 'string',
          date: 'string',
          timeStart: 'string',
          timeEnd: 'string',
          location: 'string',
          description: 'string',
          organisation_code: 'string',
          initiator_user_id: 'string',
          created_at: 'string',
          updated_at: 'string'
        },
        {
          id: 'string',
          title: 'string',
          date: 'string',
          timeStart: 'string',
          timeEnd: 'string',
          location: 'string',
          description: 'string',
          organisation_code: 'string',
          initiator_user_id: 'string',
          created_at: 'string',
          updated_at: 'string'
        },
        {
          id: 'string',
          title: 'string',
          date: 'string',
          timeStart: 'string',
          timeEnd: 'string',
          location: 'string',
          description: 'string',
          organisation_code: 'string',
          initiator_user_id: 'string',
          created_at: 'string',
          updated_at: 'string'
        }
      ],
      created_at: 'string',
      updated_at: 'string'
    }
  ];

  constructor(
    public dateParser: DateParserService
  ) {
    // this.programs = [];
    if (this.programs.length > 0) this.showActivity = true;
  }

  updateActivities() {
    // Close any open sliding items when the activities updates
    if (this.activityList) {
      this.activityList.closeSlidingItems();
    }
  }

}
  