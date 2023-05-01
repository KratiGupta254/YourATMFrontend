import { Component, OnInit } from '@angular/core';
import { Deposit } from 'src/app/Modal/Deposit';
import { OperationsService } from 'src/app/services/operations.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit{
  deposit:Deposit=new Deposit();
  accNo!:number;

  constructor(private operationsServce:OperationsService,private userService: UserService){}

  ngOnInit(): void {
     let damount = sessionStorage.getItem("accountNumber");
    if(damount!=null)
      this.accNo = JSON.parse(damount);

      this.deposit.accNo = this.accNo;
   }

    onDeposit(){
      if(this.deposit.depositAmt<0)
        alert("Please deposit some money")
        else{
    this.operationsServce.depositAmt(this.deposit).subscribe({
      next: (data:any) => {
          console.log("Success");
          console.log(JSON.stringify(data));
          alert("Amount Successfully Deposited");
          // this.router.navigate(['/functions']);


        }
        ,
       error: (error) => {
        alert("Sorry! There is some Error");
          // console.log(JSON.stringify(error));
        }
        }
       )
      }

  }


}
