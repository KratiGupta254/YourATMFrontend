import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from 'src/app/Modal/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUser:LoginUser = new LoginUser();
registerform !: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService: UserService) { }

  ngOnInit(): void {
  this.registerform=this.formBuilder.group(
    {
      accNo:["",[Validators.required,Validators.pattern(/^\d{10}$/)]],
      pin: ["",[Validators.required,Validators.pattern(/^\d{4}$/)]],
      recaptcha:["",Validators.required]
    }
  )
  }

  siteKey:string="6Le52awlAAAAAF9PXPK0nqp8wLTI11oxe9tiaMME";

  submit(){
    console.log("submitted");

  }

  get AccountNo():FormControl{
    return this.registerform.get("accNo") as FormControl;
  }

  get Pin():FormControl{
    return this.registerform.get("pin") as FormControl;
  }

  onFunctions(){

    if(this.registerform.controls['recaptcha'].status==='INVALID'){
    alert("Invalid Captcha");
    return;
    }


  this.userService.checkUser(this.loginUser).subscribe({
    next: (data:any) => {
        console.log("Success");
        console.log(JSON.stringify(data));

        //alert("Successful Login");
        sessionStorage.setItem('accountNumber',this.loginUser.accNo.toString());
        this.router.navigate(['/functions']);

      }
      ,
     error: (error) => {
      alert("Error");

      }
      }
     )


    }
}
