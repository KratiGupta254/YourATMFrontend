import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryModel } from 'src/app/Modal/Transaction';
import { HistoryService } from 'src/app/services/history.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  balance!: object;
  historyModel!: HistoryModel[];
  transactionType: boolean = true;

  constructor(private historyService: HistoryService, private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {
    // this.userService.getBalance().subscribe(arg => {this.balance = arg;});
    this.userService.validUser();
    this.userService.getBalance().subscribe(arg => {
      this.balance = arg;
      // this.bal = JSON.stringify(this.balance)
      // console.log(this.balance + " " + this.bal);
    });


    const userId = Number(this.route.snapshot.params['accNo']);
    console.log("ewnkdn");

    this.historyService.transactionHistory(userId).subscribe(
      (data: any) => {

        console.log(data);
        if (data.functionalityStatus === false)
          data.functionalityStatus = "Deposit"
        this.historyModel = data;
        // if(this.historyModel)

        console.log(this.historyModel);

      })

  }
}
