import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Modal/SignUp';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import { EmailRequest } from 'src/app/Modal/Email';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = new User();
  emailRequest:EmailRequest=new EmailRequest;
  to:any;

  captchaImage!: string;
accNo: any;

  constructor(private router:Router,private userService: UserService,private operationsServce: OperationsService){}

  ngOnInit(): void {
    // let temp = sessionStorage.getItem("emailId");
    // if(temp!=null)
    //   this.to = JSON.parse(temp);
    //   this.to=temp;
    //   console.log(this.to);
    //   this.emailRequest.to = this.to;

  }

  signupform=new FormGroup(
    {
       accNo:new FormControl("",[Validators.required,Validators.pattern(/^\d{10}$/)]),
        name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z].*')]),
         fatherName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z].*')]),
          email:new FormControl("",[Validators.required,Validators.email]),
           address:new FormControl("",[Validators.required,Validators.maxLength(70)]),
           pin: new FormControl("",[Validators.required,Validators.pattern(/^\d{4}$/)]),
            dob:new FormControl("",[Validators.required])



    }
  );



  store(){
    console.log("submitted");
  }

  get AccountNo():FormControl{
    return this.signupform.get("accNo") as FormControl;
  }

  get Name():FormControl{
    return this.signupform.get("name") as FormControl;
  }

  get FatherName():FormControl{
    return this.signupform.get("fatherName") as FormControl;
  }

  get Email():FormControl{
    return this.signupform.get("email") as FormControl;
  }

  get Address():FormControl{
    return this.signupform.get("address") as FormControl;
  }

  get Pin():FormControl{
    return this.signupform.get("pin") as FormControl;
  }
  get Dob():FormControl{
    return this.signupform.get("dob") as FormControl;
  }

  onHome(){
    this.userService.addUser(this.user).subscribe({
    next: (data:any) => {
        console.log("Success");
        // console.log(JSON.stringify(data));
        alert("Check your mail for Successful registration");
        sessionStorage.setItem('emailId',this.user.email);
        this.emailRequest.to=this.user.email;

        this.operationsServce.sendEmail(this.emailRequest).subscribe(
            (res)=>{

              console.log("email sent");

            }

          )
        this.router.navigate(['login']);


      },
     error: (error) => {
        console.log(JSON.stringify(error));
        alert("error");

      }

    })
  };
}
