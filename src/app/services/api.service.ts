import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IRequest } from '../model/irequest';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://webcrape.herokuapp.com/api/v1/extract';


constructor(private http: HttpClient) { }

scrapeWebPage(formData: IRequest): Observable<any> {

  return this.http.post(this.url, formData)
  .pipe(
    tap((response: any) => { console.log(response)})
  );
}

}
