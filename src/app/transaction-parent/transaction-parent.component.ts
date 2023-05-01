import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-parent',
  templateUrl: './transaction-parent.component.html',
  styleUrls: ['./transaction-parent.component.css']
})
export class TransactionParentComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    console.log("parent called");

    this.router.navigate(['/transactionbox']);
  }

}
