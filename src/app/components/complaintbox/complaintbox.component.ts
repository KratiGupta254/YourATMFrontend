import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Complain } from 'src/app/Modal/Complain';
import { EmailRequest } from 'src/app/Modal/Email';
import { OperationsService } from 'src/app/services/operations.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-complaintbox',
  templateUrl: './complaintbox.component.html',

})
export class ComplaintboxComponent implements OnInit{

  complain:Complain=new Complain();

  accNo!:number;
  constructor(private operationsServce:OperationsService){}
  ngOnInit(): void {
    let temp = sessionStorage.getItem("accountNumber");
    if(temp!=null)
      this.accNo = JSON.parse(temp);

      this.complain.accNo = this.accNo;



  }



  onComplain(){
    this.operationsServce.addComplain(this.complain).subscribe(
      {
        next: (data:any) => {
          console.log("Success");
          // console.log(JSON.stringify(data));
          alert("Complain Successfully noted");
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
