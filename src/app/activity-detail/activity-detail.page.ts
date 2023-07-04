import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../models/models';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage {

  defaultHref = '';
  activity: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ionViewWillEnter() {
    const activityId = this.route.snapshot.paramMap.get('activityId');
    if (activityId != null) this.activity = this.getActivity(activityId);
    else this.router.navigate(['/tab1']);
  }

  getActivity(activityId: string): Activity {
    let activity_tmp: Activity = {
      id: activityId,
      title: 'string',
      date: 'string',
      timeStart: 'string',
      timeEnd: 'string',
      location: 'string',
      description: 'stringstringstringstringstringstringstringstringstringstring stringstringstringstringstringstringstringstringstringstring stringstringstringstringstringstringstringstringstringstring',
      organisation_code: 'string',
      initiator_user_id: 'string',
      created_at: 'string',
      updated_at: 'string'
    }
    activity_tmp.id = activityId;
    return activity_tmp;
  }
}
