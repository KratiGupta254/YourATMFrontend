import { Injectable, OnInit } from '@angular/core';
import baseUrl from './helpin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  accNo!:any;
  constructor(private http:HttpClient) { }


  public addUser(user:any):Observable<Object>{
    return this.http.post(`${baseUrl}/atm/signup`,user, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

  }

  public checkUser(loginUser:any):Observable<Object>
  {
    return this.http.post(`${baseUrl}/atm/login`,loginUser);
  }

  validUser(){
    let user=sessionStorage.getItem('accountNumber');
    //console.log("acc no = " + user);
    this.accNo = user;
    return user;
  }
  ngOnInit(): void {
   this.validUser();
  }

  public getBalance():Observable<Object>{
    return this.http.get(`${baseUrl}/atm/getbalance/${this.accNo}`);
  }
}
