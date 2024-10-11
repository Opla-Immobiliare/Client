import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { login } from '../services/auth.actions';
import { noop, tap } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  type: string = 'login';

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.loginForm = this.generateLoginForm();
  }

  ngOnInit(): void {
  }

  // Login
  doLogin(): void {
    let obj = new Object({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
    this.auth.login(obj)
      .pipe(
        tap(user => {
          this.store.dispatch(login({ user }));
          if (user.role === 'agency') this.auth.setAgency(true);
          if (user.role === 'user') this.auth.setUser(true);
          if (user.completedProfile) {
            // this.router.navigateByUrl('/');
            window.location.href= "http://localhost:4200/profile"
          }
          window.location.href = "http://localhost:4200/profile/complete"
        })
      )
      .subscribe(
        noop,
        () => alert("Login failed")
      )
  }

  // Generate login form
  generateLoginForm(): FormGroup{
    return new FormGroup({
      email: new FormControl(undefined, [Validators.email, Validators.required]),
      password: new FormControl(undefined, [Validators.required])
    });
  };

  labelControl(name: string): string {
    if (this.loginForm.controls[name].valid && this.loginForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.loginForm.controls[name].invalid && (this.loginForm.controls[name].touched || this.loginForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }
}
