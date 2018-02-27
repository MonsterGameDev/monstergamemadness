import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IMonster } from '../models/monster';

@Injectable()
export class MonstersService {
  private serviceUrl = "../../assets/api/statsCollection.json";

  getMonsters(): Observable<IMonster[]> {
    return this._http.get<IMonster[]>(this.serviceUrl)
      .do (data => {
        console.log(JSON.stringify(data))
      })
      .catch (this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = "";
    if(err.error instanceof Error){
      errMsg = `Der opstod en fejl ${err.error.message}`;
    } else {
      errMsg = `Server returnerede code: ${err.status}, fejlmeddelelse: ${err.message}`;
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private _http: HttpClient) { }

}
