import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-transactionbox',
  templateUrl: './transactionbox.component.html',
  styleUrls: ['./transactionbox.component.css']
})
export class TransactionboxComponent implements OnInit{

  accNo!:number;
  constructor(private router:Router, private historyService:HistoryService){
  }

  ngOnInit(): void {
    let tamount = sessionStorage.getItem("accountNumber");
    if(tamount!=null)
      this.accNo = JSON.parse(tamount);

      //this.accNo = this.accNo;
  }

  openTransaction(){
    console.log(this.accNo);
    this.router.navigate(['/transactions',this.accNo]);
    // console.log("hellll");
  }

}
