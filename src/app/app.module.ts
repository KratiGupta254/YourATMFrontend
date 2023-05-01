import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FunctionsComponent } from './components/functions/functions.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ChangepinComponent } from './components/changepin/changepin.component';
import { TransactionboxComponent } from './components/transactionbox/transactionbox.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ComplaintboxComponent } from './components/complaintbox/complaintbox.component';
//import { TransactionParentComponent } from './transaction-parent/transaction-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FunctionsComponent,
    DepositComponent,
    WithdrawComponent,
    ChangepinComponent,
    TransactionboxComponent,
    TransactionComponent,
    ComplaintboxComponent,
 //   TransactionParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
