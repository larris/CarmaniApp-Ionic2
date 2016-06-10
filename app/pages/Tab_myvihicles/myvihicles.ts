import {Page, NavController} from 'ionic-angular';
import {MyVihiclesService} from '../../providers/my-vihicles-service/my-vihicles-service';

@Page({
  templateUrl: 'build/pages/Tab_myvihicles/myvihicles.html',
  providers:[MyVihiclesService]
})
export class MyVihicles {
  public vihicles: any;
  public keyword: String;

  constructor(nav: NavController, public vihicleService: MyVihiclesService) {
     this.keyword = '';
     this.loadVihicles();
  }

 loadVihicles(){

   return this.vihicleService.load().then(data =>{this.vihicles=data;});
 }

 searchitems(searchbar){
  let q:any;
  
  q = searchbar.value;
    console.log('test getitems value ' + q );

  if (q.trim() == '') {
      return;
    }
 }

}
