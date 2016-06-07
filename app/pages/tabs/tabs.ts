import {Page} from 'ionic-angular';
import {Calendar} from '../Tab_calendar/calendar';
import {MyVihicles} from '../Tab_myvihicles/myvihicles';
import {Vihiclecosts} from '../Tab_vihiclecosts/vihiclecosts';
import {HomePage} from '../home/home';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabhome: any = HomePage;
  tabmyvihicles: any = MyVihicles;
  tabvihiclecosts: any = Vihiclecosts;
  tabcalendar: any = Calendar;
}
