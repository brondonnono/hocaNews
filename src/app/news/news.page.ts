import { Component, OnInit } from '@angular/core';
import { News } from '../models/models';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  actualities: News[] = [];

  constructor() { }

  ngOnInit() {
    this.actualities = this.getActualities();
  }

  getActualities() {
    let actualities_tmp: News[] = [
      {
        id: '1',
        title: 'Besoin d\'argent pour tes projets? ceci est pour toi.',
        endDate: '07/26/2023',
        description: 'Programme de subvention pour les microprojet au Cameroun dirigé par la CCAM (CELLULE DR COORDINATION ET APPUI AU MICRPROJET)',
        organisation_code: 'All',
        initiator_user_id: '1',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
      },
      {
        id: '2',
        title: 'Tu diposes d\'un projet mais tu manques d\'argent? Lis ceci',
        endDate: '07/26/2023',
        description: 'Programme de subvention pour les microprojet au Cameroun dirigé par la CCAM (CELLULE DR COORDINATION ET APPUI AU MICRPROJET)',
        organisation_code: 'All',
        initiator_user_id: '1',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
      },
      {
        id: '3',
        title: 'Tu veux agrandir ton activité mais tu as des problemes de financement? Nous sommes là pout toi',
        endDate: '07/26/2023',
        description: 'Programme de subvention pour les microprojet au Cameroun dirigé par la CCAM (CELLULE DR COORDINATION ET APPUI AU MICRPROJET)',
        organisation_code: 'All',
        initiator_user_id: '1',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
      },
      {
        id: '4',
        title: 'Ton projet n\'avance plus faute de moyen? Contact nous',
        endDate: '07/26/2023',
        description: 'Programme de subvention pour les microprojets au Cameroun dirigé par la CCAM (CELLULE DR COORDINATION ET APPUI AU MICRPROJET)',
        organisation_code: 'All',
        initiator_user_id: '1',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
      },
    ];
    return actualities_tmp;
  }

}
