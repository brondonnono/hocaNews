import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../models/models';
import { DateParserService } from '../services/date-parser.service';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.page.html',
  styleUrls: ['./actuality.page.scss'],
})
export class ActualityPage {

  defaultHref = '/app/tabs/news';
  actuality: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dateParser: DateParserService
  ) { }

  ionViewWillEnter() {
    const actualityId = this.route.snapshot.paramMap.get('actualityId');
    if (actualityId != null) this.actuality = this.getActuality(actualityId);
    else this.router.navigate(['/app/tabs/news']);
  }

  getActuality(actualityId: string): News {
    let actuality_tmp: News = {
        id: actualityId,
        title: 'Ton projet n\'avance plus faute de moyen? Contact nous',
        endDate: '07/26/2023',
        img: '',
        description: 'Programme de subvention pour les microprojets au Cameroun dirigé par la CCAM (CELLULE DR COORDINATION ET APPUI AU MICRPROJET)',
        organisation_code: 'All',
        initiator_user_id: '1',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
    }
    return actuality_tmp;
  }

}
