import { Component, OnInit } from '@angular/core';
import { Changepin } from 'src/app/Modal/Changepin';
import { ChangepinService } from 'src/app/services/changepin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
export class ChangepinComponent implements OnInit{

changepin: Changepin=new Changepin();
   accNo!:number;
   boolCheck:boolean =false;

  constructor(private changepinService: ChangepinService,private userService: UserService){

  }

  ngOnInit(): void {
     let changeacc = sessionStorage.getItem("accountNumber");
    if(changeacc!=null)
      this.accNo = JSON.parse(changeacc);

      this.changepin.accNo = this.accNo;
   }

  onChangePin(){
    console.log(JSON.stringify(this.changepin ));


    this.changepinService.setNewPin(this.changepin).subscribe({
      next: (data:any) => {
        this.boolCheck = data;
        if(this.boolCheck){
        console.log("from sucess = " + this.boolCheck );
          console.log("Success");
          // console.log(JSON.stringify(data));
          alert("Pin changed successfully ");
          // this.router.navigate(['/functions']);
        }
        else{
          alert("wrong pin");
        }
        }
        ,
       error: (error) => {
        console.log("from error = " + this.boolCheck );

        alert("Sorry! Some error occurred");
          // console.log(JSON.stringify(error))
        }})}
}
