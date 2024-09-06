import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const countryCodes = require('country-codes-list');

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.scss']
})
export class UpdateUserFormComponent implements OnInit{

  updateUserForm: FormGroup;
  countryCodesList = countryCodes.customList('countryCallingCode', '(+{countryCallingCode} {countryCode})');

  constructor() {
    this.updateUserForm = this.generateUpdateUserForm();
  }

  // Generate Update User Form
  generateUpdateUserForm(): FormGroup {
    let date = new Date();
    return new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      phoneCode: new FormControl('(+39 IT)', [Validators.required]),
      phone: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*')]),
      day: new FormControl(date.getDate(), [Validators.required, Validators.max(31), Validators.min(1)]),
      month: new FormControl(this.setMonthValue(date.getMonth()+1), [Validators.required]),
      year: new FormControl(date.getFullYear() - 18, [Validators.required, Validators.min(date.getFullYear() - 120), Validators.max(date.getFullYear() - 18)])
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

  ngOnInit(): void {}
}
