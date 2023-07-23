import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly Base_URL: string;
  // service to send the formdata to node server

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('auth/signup');
  }
  signup(signupUser: FormData) {
    return this.http.post(this.Base_URL, signupUser);
  }
}
