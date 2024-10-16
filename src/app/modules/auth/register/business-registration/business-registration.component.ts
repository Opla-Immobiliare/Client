import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { login } from '../../services/auth.actions';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})

export class BusinessRegistrationComponent implements OnInit {
  
  registerForm: FormGroup;
  buttonValue: string = 'Avanti';
  type: string = 'email';

  constructor(private auth: AuthService, private router: Router, private store: Store<AppState>) {
    this.registerForm = this.registerFormCreation();
  }

  // Register Form Creation
  registerFormCreation(): FormGroup {
    return new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      password: new FormControl(undefined, [Validators.required]),
      terms: new FormControl([Validators.required])
    })
  }

  register(): void {
    if (this.type == 'email') {
      this.type = 'password';
      this.buttonValue = 'Crea Account';
    }
    else {
      if (this.type == 'email') {
        this.type = 'password';
        this.buttonValue = 'Crea Account';
      }
      else {
        let obj = new Object({
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          clientUri: "http://167.99.247.80",
          role: "agency"
        });
        this.auth.register(obj).pipe(
          tap(user => {
            if (user.role === 'agency') this.auth.setAgency(true);
            if (user.role === 'user') this.auth.setUser(true);
            this.store.dispatch(login({ user }));
            window.location.href = "http://167.99.247.80/profile/complete";
          })
        )
          .subscribe(
            noop,
            () => alert("Registration failed, try again later")
          )
      }
    }
  }

  // labelCotrol
  labelControl(name: string): string {
    if (this.registerForm.controls[name].valid && this.registerForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.registerForm.controls[name].invalid && (this.registerForm.controls[name].touched || this.registerForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  ngOnInit(): void {}
}{

}
