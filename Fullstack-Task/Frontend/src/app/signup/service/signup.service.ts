import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly Base_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.Base_URL = this.configService.getBaseUrl('auth/signup');
  }
  signup(signupUser: any) {
    return this.http.post(this.Base_URL, signupUser);
  }
}
