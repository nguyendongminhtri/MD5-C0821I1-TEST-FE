import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API_LOCAL
//   private API_SIGNUP = environment.API_LOCAL+'signup';
//   private API_SIGNIN = environment.API_LOCAL+'signin';
  //API_SERVER
  private API_SIGNUP = environment.API_SERVER+'signup';
  private API_SIGNIN = environment.API_SERVER+'signin';
  constructor(private http: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<any>{
    return this.http.post(this.API_SIGNUP, signUpForm);
  }
  signIn(signInForm: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }
}
