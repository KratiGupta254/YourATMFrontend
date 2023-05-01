import { Component, OnInit } from '@angular/core';
import { Withdraw } from 'src/app/Modal/Withdraw';
import { OperationsService } from 'src/app/services/operations.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit{
   withdraw:Withdraw=new Withdraw();
   balance!:any;
   accNo!:number;

   constructor(private operationsService: OperationsService,private userService: UserService){}


   ngOnInit(): void {
    // this.userService.validUser();
    this.userService.getBalance().subscribe(arg => {
      this.balance = arg;
      // console.log(JSON.stringify(this.balance));
    }
      );


     let tempvar = sessionStorage.getItem("accountNumber");
    if(tempvar!=null)
      this.accNo = JSON.parse(tempvar);

      this.withdraw.accNo = this.accNo;
   }

  onWithdraw(){
    if(this.withdraw.withdrawAmt>25000){
      alert("You can only withdraw at max 25k per time");
    }
    else if(this.withdraw.withdrawAmt>this.balance){
      alert("Insuffient Balance");
    }
    else{
    this.operationsService.withdrawAmt(this.withdraw).subscribe({
      next: (data:any) => {
          console.log("Success");
          console.log(JSON.stringify(data));
          alert("Successful Withdraw");
        }
        ,
       error: (error) => {
        alert("Sorry some error occured");

        }
        }
       )
      }
  }

}
