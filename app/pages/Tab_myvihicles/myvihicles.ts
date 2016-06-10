import {Page, NavController} from 'ionic-angular';
import {MyVihiclesService} from '../../providers/my-vihicles-service/my-vihicles-service';

@Page({
  templateUrl: 'build/pages/Tab_myvihicles/myvihicles.html',
  providers:[MyVihiclesService]
})
export class MyVihicles {
  public vihicles: any;
  constructor(nav: NavController, public vihicleService: MyVihiclesService) {
     this.loadVihicles();
  }

 loadVihicles(){
   this.vihicleService.load().then(data =>{this.vihicles=data;});
 }

}
