import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const countryCodes = require('country-codes-list');

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})

export class CompleteProfileComponent implements OnInit {

  additionalInfoForm: FormGroup;
  countryCodesList = countryCodes.customList('countryCallingCode', '(+{countryCallingCode} {countryCode})');
  monthValue = "";

  constructor() {
    this.additionalInfoForm = this.generateAdditionalInfoForm();
  }

  // Generate Additional Information Form
  generateAdditionalInfoForm(): FormGroup {
    let date = new Date();
    return new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      phoneCode: new FormControl('(+39 IT)', [Validators.required]),
      phone: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*')]),
      day: new FormControl(date.getDate(), [Validators.required, Validators.max(31), Validators.min(1)]),
      month: new FormControl(this.setMonthValue(date.getMonth()), [Validators.required]),
      year: new FormControl(date.getFullYear() - 18, [Validators.required, Validators.min(date.getFullYear() - 120), Validators.max(date.getFullYear() - 18)])
    })
  }

  // Submit Additional Information Form
  submitAdditionalInfo(): void {

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
    if (this.additionalInfoForm.controls[name].valid && this.additionalInfoForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.additionalInfoForm.controls[name].invalid && (this.additionalInfoForm.controls[name].touched || this.additionalInfoForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  ngOnInit(): void {
    // console.log('CountryCodes', this.countryCodesList);
  }

}