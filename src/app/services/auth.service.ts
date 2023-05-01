import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService:UserService,private router:Router) { }

  canActivate(){
    if(this.userService.validUser()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
