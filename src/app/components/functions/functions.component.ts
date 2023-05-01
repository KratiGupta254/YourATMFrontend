import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {

  constructor(private router: Router){}

onLogout(){
  sessionStorage.removeItem('accountNumber');
  sessionStorage.removeItem('emailId');
  this.router.navigate(['']);
}


}
