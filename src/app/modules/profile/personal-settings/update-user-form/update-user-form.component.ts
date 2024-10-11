import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UserSettings } from '../../models/user-settings.model';

const countryCodes = require('country-codes-list');

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.scss']
})
export class UpdateUserFormComponent implements OnInit{
  private authService = inject(AuthService);

  updateUserForm: FormGroup;
  countryCodesList = countryCodes.customList('countryCallingCode', '(+{countryCallingCode} {countryCode})');
  phonecodes: boolean = false;
  isAgency: boolean = false;
  @Input() user?: UserSettings;

  constructor() {
    this.updateUserForm = this.generateUpdateUserForm();
  }

  // Generate Update User Form
  generateUpdateUserForm(): FormGroup {
    let date = new Date();
    return new FormGroup({
      fullName: new FormControl(undefined),
      phoneCode: new FormControl('(+39 IT)'),
      phoneNumber: new FormControl(undefined, [Validators.pattern('[0-9]*')]),
      day: new FormControl(date.getDate(), [Validators.max(31), Validators.min(1)]),
      month: new FormControl(this.setMonthValue(date.getMonth()+1)),
      year: new FormControl(date.getFullYear() - 18, [Validators.min(date.getFullYear() - 120), Validators.max(date.getFullYear() - 18)]),
      companyName: new FormControl(undefined),
      country: new FormControl({ value: "Italy", disabled: true }),
      city: new FormControl(undefined),
      address: new FormControl(undefined),
      zip: new FormControl(undefined),
      tinNumber: new FormControl(undefined),
    })
  }

  // Update User
  updateUser(): void {

  }

  // Set Month value
  setMonthValue(month: number): string {
    switch (month) {
      case 1:
        return "January";
        break;
      case 2:
        return "February";
        break;
      case 3:
        return "March";
        break;
      case 4:
        return "April";
        break;
      case 5:
        return "May";
        break;
      case 6:
        return "June";
        break;
      case 7:
        return "July";
        break;
      case 8:
        return "August";
        break;
      case 9:
        return "September";
        break;
      case 10:
        return "October";
        break;
      case 11:
        return "November";
        break;
      case 12:
        return "December";
        break;
      default:
        return "Month";
    }
  }

  labelControl(name: string): string {
    if (this.updateUserForm.controls[name].valid && this.updateUserForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.updateUserForm.controls[name].invalid && (this.updateUserForm.controls[name].touched || this.updateUserForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  ngOnInit(): void {
    this.authService.isAgency.subscribe(res => this.isAgency = res);
    console.log("user", this.user);
    if (this.user)
    {
      this.updateUserForm.patchValue({
        fullName: this.user.fullName,
        phoneNumber: this.user.phoneNumber,
        companyName: this.user.companyName,
        city: this.user.city,
        address: this.user.address,
        zip: this.user.zipCode,
        tinNumber: this.user.tinNumber,
      });
    }
  }
}
