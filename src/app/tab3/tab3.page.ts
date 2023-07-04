import { Component } from '@angular/core';
import { Cotisation, Member } from '../models/models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  memberData: any;
  userId: any = '1';
  memberCotisations: any;
  
  constructor() {
    this.getMemberData();
  }

  async getMemberData() {
    let member_tmp: Member = {
      id: '1',
      userId: this.userId,
      name: 'Brondon Nono',
      gender: 'Masculin',
      organisation_code: 'Ndjangui',
      function: 'Membre',
      created_at: '07/21/2021',
      updated_at: '07/21/2021'
    };
    this.memberData = member_tmp;
    this.getMemberCotisations(this.memberData.id, this.memberData.organisation_code);
  }

  async getMemberCotisations(memberId: string, organisation_code: string) {
    let all_cotisations: Cotisation[] = [
      {
        id: '0',
        title: 'Présence',
        member_orders: ['1', '5', '4', '3', '2'],
        organisation_code: 'Ndjangui',
        initiator_user_id: '1',
        currentPosition: -1,
        created_at: '07/12/2021',
        updated_at: '07/12/2021'
      },
      {
        id: '1',
        title: 'Tontine de 5000',
        member_orders: ['1', '5', '4'],
        organisation_code: 'Ndjangui',
        initiator_user_id: '1',
        currentPosition: 1,
        created_at: '07/12/2021',
        updated_at: '07/12/2021'
      },
      {
        id: '2',
        title: 'Tontine de 5000',
        member_orders: ['1', '5', '4'],
        organisation_code: 'TSWEGUI',
        initiator_user_id: '1',
        currentPosition: 2,
        created_at: '07/12/2021',
        updated_at: '07/12/2021'
      },
      {
        id: '3',
        title: 'Tontine de 10000',
        member_orders: ['3', '5', '2', '1'],
        organisation_code: 'Ndjangui',
        initiator_user_id: '1',
        currentPosition: 2,
        created_at: '07/12/2021',
        updated_at: '07/12/2021'
      },
      {
        id: '4',
        title: 'Tontine de 2000',
        member_orders: ['7', '5', '4'],
        organisation_code: 'Ndjangui',
        initiator_user_id: '1',
        currentPosition: 1,
        created_at: '07/1/2021',
        updated_at: '07/1/2021'
      },
    ];
    let res: Cotisation[] = [];
    all_cotisations.forEach((cotisation: Cotisation) => {
      if(cotisation.organisation_code === organisation_code)
        cotisation.member_orders.forEach((memId: string) => {
          if (memId === memberId) res.push(cotisation);
        });
    });
    this.memberCotisations = res;
  }

  getMemberPosition(memberId: string, cotisation: Cotisation) {
   return cotisation.member_orders.findIndex((idmember: string) => idmember == memberId) + 1;
  }

  logout() {
  }

  hasReceive(memberId: string, cotisation: Cotisation) {
    let res = '';
    if (cotisation.currentPosition != -1) {
      let memberPosition = this.getMemberPosition(memberId, cotisation);
      // if (cotisation.currentPosition >= memberPosition)
      if (memberPosition <= cotisation.currentPosition)
        res = 'Reçu';
      else res = 'En attente';
    } else res = ''; 
    console.log('res = ', res, 'memberPosition = ', this.getMemberPosition(memberId, cotisation), 'currentPosition = ', cotisation.currentPosition);
    return res;
  }
}
