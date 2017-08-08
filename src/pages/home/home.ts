import { Component, Pipe, Directive } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JsonServiceProvider } from '../../providers/json-service/json-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {

  public json: any;

  loadJson(url : string) {
    //주소입력
    this.jsonservice.load(url).
      then(data => {
        this.json = data
      })
  }

  constructor(public nav: NavController, public jsonservice: JsonServiceProvider) {
    this.loadJson('1');
  }
}
