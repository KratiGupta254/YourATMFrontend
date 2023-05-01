import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helpin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http:HttpClient) { }

  public depositAmt(depositamt:any):Observable<Object>
  {
    return this.http.put(`${baseUrl}/atm/deposit`,depositamt);
  }
  public withdrawAmt(withdrawamt:any):Observable<Object>
  {
    return this.http.put(`${baseUrl}/atm/withdrawl`,withdrawamt);
  }

  public addComplain(complaint:any):Observable<object>
  {
    return this.http.post(`${baseUrl}/atm/complaint`,complaint);
  }

  public sendEmail(emailRequest:any):Observable<Object>
  {
    console.log(emailRequest);
    return this.http.post(`${baseUrl}/atm/`,emailRequest);
  }
}
