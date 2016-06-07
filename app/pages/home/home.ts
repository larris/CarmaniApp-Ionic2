import {Page, NavController} from 'ionic-angular';
import {OffersPage} from '../offers/offers';
import {SearchPage} from '../search/search';
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
  
  goToOffers() {
    this.nav.push(OffersPage);
  }
  
  goToSearch() {
    this.nav.push(SearchPage);
  }

}
