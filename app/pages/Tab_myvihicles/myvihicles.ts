import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/Tab_myvihicles/myvihicles.html',
})
export class MyVihicles {
    private results;
  constructor(nav: NavController) {
    this.results = this.getResults();
  }

    getResults(){
        return [
            {"carName":"Nissan",
                "carType" : "Pulsar",
                "year" : "2015"
            },
            {"carName":"Opel",
                "carType" : "Astra",
                "year" : "2005"
            },
            {"carName":"Hundai",
                "carType" : "I30",
                "year" : "2012"
            }
        ]
    }
}
