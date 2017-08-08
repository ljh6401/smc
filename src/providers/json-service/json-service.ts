import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class JsonServiceProvider {

  data: string;
  readdata: string;
  constructor(public http: Http) {
    console.log('Hello JsonServiceProvider Provider');
  }

  //테스트1
  load(Url : string) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('http://222.231.33.89:12140/web/member/'+Url)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);

          //배열에 [가 있을경우 다중 배열
          if (JSON.stringify(data).substring(0, 1) == '[') {
            this.data = data;
          }
          //없을경우 단일 배열
          else {
            let obj = JSON.stringify(data);
            obj = JSON.parse('['+obj+']');
            this.data = obj;
          }

          resolve(this.data);
        });
    });
  }

  //테스트2
  getRequest() {
    return this.http.get('http://222.231.33.89:12140/web/member').map(res => res.json());
  }
}



