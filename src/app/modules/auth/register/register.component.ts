import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { noop, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { login } from '../services/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  buttonValue: string = 'Avanti: Aggiungi password';
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

  // Register the user
  register(): void {
    if (this.type == 'email') {
      this.type = 'password';
      this.buttonValue = 'Crea Account';
    }
    else {
      let obj = new Object({
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        clientUri: "https://localhost:4200",
        role: "user"
      });
      this.auth.register(obj).pipe(
        tap(user => {
          this.store.dispatch(login({ user }));
          if (user.role === 'agency') this.auth.setAgency(true);
          if (user.role === 'user') this.auth.setUser(true);
          this.router.navigateByUrl('/profile/complete');
        })
      )
      .subscribe(
        noop,
        () => alert("Registration failed, try again later")
      )
    }
  }

  // labelCotrol
  labelControl(name: string): string {
    if (this.registerForm.controls[name].valid && this.registerForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.registerForm.controls[name].invalid && (this.registerForm.controls[name].touched || this.registerForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  ngOnInit(): void {}
}
