import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './service/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
authMsg:any
  constructor(private signUpServ:SignupService){  }
//#region validation
validationForm = new FormGroup({
  name:new FormControl(null,[Validators.minLength(4),Validators.maxLength(25),Validators.required]),
  mobile:new FormControl(null,[Validators.pattern('^\\d{10}$'),Validators.required]),
  email: new FormControl(null,[Validators.email,Validators.required]),
  // image:new FormControl(),
  password: new FormControl(null,[Validators.minLength(6),Validators.required]),
  confirmPassword: new FormControl(null,[Validators.minLength(6),Validators.required])
})

get Validation(){
  return this.validationForm.valid;
}
//#endregion
  signUp(name:string, mobile:string, email:string, password:string,confirmPassword:string){
    if(password!=confirmPassword){
      this.authMsg="Please confirm your password"
      return
    }
    let signupUser = { name, mobile, email, password};
    this.signUpServ.signup(signupUser).subscribe(
      (data:any)=>{
        this.authMsg=data;
        console.log(this.authMsg)

      },
      (err)=>{
        this.authMsg=err;
        console.log(this.authMsg)

      }

    )



}

}
