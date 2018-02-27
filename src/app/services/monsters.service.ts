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
  private serviceUrlPlayer1 = "../../assets/api/statsCollection1.json";
  private serviceUrlPlayer2 = "../../assets/api/statsCollection2.json";

  getPlayer1Monsters(): Observable<IMonster[]> {
    return this._http.get<IMonster[]>(this.serviceUrlPlayer1)
      .do (data => {
        console.log("Player1: " + JSON.stringify(data))
      })
      .catch (this.handleError)
  }

  getPlayer2Monsters(): Observable<IMonster[]> {
    return this._http.get<IMonster[]>(this.serviceUrlPlayer2)
      .do (data => {
        console.log("Player2: " + JSON.stringify(data))
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
