import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ChangepinComponent } from './components/changepin/changepin.component';
import { TransactionboxComponent } from './components/transactionbox/transactionbox.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ComplaintboxComponent } from './components/complaintbox/complaintbox.component';
import { AuthService } from './services/auth.service';
//import { TransactionParentComponent } from './transaction-parent/transaction-parent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'functions',
    component: FunctionsComponent,
    canActivate: [AuthService],
    children: [
      { path: 'deposit', component: DepositComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'changepin', component: ChangepinComponent },
      { path: 'transactionbox', component: TransactionboxComponent },
      { path: 'complaintbox', component: ComplaintboxComponent },
    ],
  },
  { path: 'transactions/:accNo', component: TransactionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
