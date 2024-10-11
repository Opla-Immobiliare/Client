import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.scss']
})
export class UpdatePasswordFormComponent implements OnInit{
  private profileService = inject(ProfileService);

  updatePasswordForm: FormGroup;

  constructor() {
    this.updatePasswordForm = this.generatePasswordForm();
  }

  @Input() email?: string;

  labelControl(name: string): string {
    if (this.updatePasswordForm.controls[name].valid && this.updatePasswordForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.updatePasswordForm.controls[name].invalid && (this.updatePasswordForm.controls[name].touched || this.updatePasswordForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  // Generate Password Form 
  generatePasswordForm(): FormGroup {
    return new FormGroup({
      email: new FormControl({value: "", disabled: true}, [Validators.required, Validators.email]),
      currentPassword: new FormControl(undefined, [Validators.required]),
      newPassword: new FormControl(undefined, [Validators.required]),
      confirmPassword: new FormControl(undefined, [Validators.required])
    })
  }

  changePassword(): void {
    let obj = new Object({
      oldPassword: this.updatePasswordForm.value.currentPassword,
      newPassword: this.updatePasswordForm.value.newPassword,
      confirmPassword: this.updatePasswordForm.value.confirmPassword
    })
    this.profileService.changePassword(obj).subscribe(res => {
      console.log(res);
    })
  }
  
  ngOnInit(): void {
    if (this.email)
    {
      this.updatePasswordForm.controls['email'].setValue(this.email);
      this.updatePasswordForm.controls['email'].disable();
    }
  }
}
