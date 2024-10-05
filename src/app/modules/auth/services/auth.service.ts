import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class AuthService {

    public loginPopUp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isAgency: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    // login
    login(obj: Object): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/Auth/login`, obj);
    }

    // Forgot Password
    forgotPassword(obj: any) {
        return this.http.post(`${environment.apiUrl}/Auth/forgot-password`, obj);
    }

    // Reset Password
    resetPassword(obj: any) {
        return this.http.post(`${environment.apiUrl}/Auth/reset-password`, obj);
    }

    // Show or hide Login form
    showHideLoginForm(value: boolean) {
        this.loginPopUp.next(value);
    }

    // Register
    register(obj: any) {
        return this.http.post<User>(`${environment.apiUrl}/Auth/register`, obj);
    }

    loginPopUpSet(val: boolean): void {
        this.loginPopUp.next(val);
    }

    setAgency(val: boolean): void {
        this.isAgency.next(val);
    }

    setUser(val: boolean): void {
        this.isUser.next(val);
    }
}