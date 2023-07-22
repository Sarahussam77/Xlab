import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './service/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
authMsg:any

  constructor(private signUpServ:SignupService,private el: ElementRef){

    }
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
      let inputEl: any = this.el.nativeElement.querySelector('#image');
        let formData = new FormData();
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('password', password);

    // Append the image file to the form data
    if (inputEl.files.length > 0) {
      formData.append('image', inputEl.files[0]);
    }
    this.signUpServ.signup(formData).subscribe(
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
