import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  userId!:number;
  private baseUrl = "http://localhost:8080/atm/transactionhistory?accountNo=";
  constructor(private http:HttpClient) { }

  transactionHistory(userId:number):Observable<Object>{
    this.userId = userId;

    return this.http.get<Object>(`${this.baseUrl+this.userId}`);
  }
}
