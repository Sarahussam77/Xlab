import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './service/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
authMsg=''
errorMsg=''

  constructor(private signUpServ:SignupService,private el: ElementRef){

    }
//#region validation
validationForm = new FormGroup({
  name:new FormControl(null,[Validators.minLength(4),Validators.maxLength(25),Validators.required]),
  mobile:new FormControl(null,[Validators.required]),
  email: new FormControl(null,[Validators.email,Validators.required]),
  password: new FormControl(null,[Validators.minLength(6),Validators.required]),
  confirmPassword: new FormControl(null,[Validators.minLength(6),Validators.required])
})

get Validation(){
  return this.validationForm.valid;
}
//#endregion
  signUp(name:string, mobile:string, email:string, password:string,confirmPassword:string){
    if(password!=confirmPassword){
      this.errorMsg="Please confirm your password"
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
        this.errorMsg=""
        this.authMsg=data.name+','+data.message;


      },
      (err)=>{
        if(err.error.message.includes("mobile")){
        this.errorMsg= "mobile is required and must be valid";
        this.authMsg="";
        }else if(err.error.message.includes("name")){
          this.errorMsg="name is required and must be less than 30"
        }else if(err.error.message.includes("name")){
          this.errorMsg="email is required and must be vaild"
        }console.log(err)

      }

    )



}

}
