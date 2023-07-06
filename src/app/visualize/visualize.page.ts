import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.page.html',
  styleUrls: ['./visualize.page.scss'],
})
export class VisualizePage {

  defaultHref = '/app/tabs/tab2';
  data: any;
  contentRef = this.route.snapshot.paramMap.get('contentRef');

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.contentRef = this.route.snapshot.paramMap.get('contentRef');
    if (this.contentRef != null) this.data = this.getData(this.contentRef);
    else this.router.navigate(['/tab2']);
  }

  getData(contentRef: string) { }

  getTitle() {
    let res = '';
    switch (this.contentRef) {
      case 'order':
        res = 'Odre de cotisation';
        break;

      case 'fond':
        res = 'Fond';
        break;

      case 'presence':
        res = 'Présence';
        break;

      case 'bank':
        res = 'Banque';
        break;

      case 'state':
        res = 'Etats cotisations';
        break;

      default:
        break;
    }
    return res;
  }
}
