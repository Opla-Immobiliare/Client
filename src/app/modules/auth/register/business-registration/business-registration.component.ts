import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})

export class BusinessRegistrationComponent implements OnInit {
  
  registerForm: FormGroup;
  buttonValue: string = 'Avanti';
  type: string = 'email';

  constructor() {
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
