import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import baseUrl from './helpin';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepinService {

  constructor(private http:HttpClient) { }

  public setNewPin(setnewpin:any):Observable<any>
  {
    return this.http.put(`${baseUrl}/atm/newpin`,setnewpin);
  }
}
