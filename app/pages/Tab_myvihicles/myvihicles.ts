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

 getitems(searchbar){
  let q:any;
  this.loadVihicles();

  q = searchbar.value;

  if (q.trim() == '') {
      return;
    }


 }

}
