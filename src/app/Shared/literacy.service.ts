import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Literacy, LiteracyResponse } from '../literacy/literacy';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LiteracyService {

  constructor(protected http: HttpClient) { }

  private errorObserver(error: any) {
    console.log(error);
  }

  public getHeaders(): HttpHeaders {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': '579b464db66ec23bdd00000147916d921fa2437e50f0cf41b44804ac',
      });
  }

  public getLiteracyRates(): Observable<Literacy[]> {
    return this.http.
    get('https://api.data.gov.in/resource/7d632106-a7de-49ae-a360-7cf230c189fa?' +
    'api-key=579b464db66ec23bdd00000147916d921fa2437e50f0cf41b44804ac&format=json&offset=0&limit=100')
    .pipe(map((literacy: {records}) => {
      console.log(literacy);
      return literacy ? literacy.records.map(
        (val) => {
          return new Literacy(val._s_no_,
            val.name_of_states_uts,
            Number(val.literacy_rate___persons),
            Number(val.literacy_rate___male),
            Number(val.literacy_rate___female)
            );
        }
      )
       :
      null;
    }));
  }
}
