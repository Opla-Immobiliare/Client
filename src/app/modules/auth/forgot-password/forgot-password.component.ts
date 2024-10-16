import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{

  forgotPasswordForm: FormGroup;
  success: boolean = false;

  constructor(private aithService: AuthService) {
    this.forgotPasswordForm = this.generateForgotPasswordForm();
  }

  ngOnInit(): void {}

  forgotPassword(): void {
    let obj = new Object({
      email: this.forgotPasswordForm.value.email,
      clientUri: "http://167.99.247.80/auth/reset-password"
    });

    // this.aithService.forgotPassword(obj).subscribe(
    //   res => {
    //     this.success = true;
    //   }
    // );
    console.log('ForgotPassword', obj);
    this.success = true;
  }

  // Generate forgotPasswordForm
  generateForgotPasswordForm(): FormGroup {
    return new FormGroup({
      email: new FormControl([Validators.required, Validators.email])
    });
  }
}
