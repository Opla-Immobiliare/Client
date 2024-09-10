import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const countryCodes = require('country-codes-list');

@Component({
  selector: 'app-complete-business-profile',
  templateUrl: './complete-business-profile.component.html',
  styleUrls: ['./complete-business-profile.component.scss']
})

export class CompleteBusinessProfileComponent implements OnInit {

  additionalInfoForm: FormGroup;
  countryCodesList = countryCodes.customList('countryCallingCode', '(+{countryCallingCode} {countryCode})');
  monthValue = "";

  constructor() {
    this.additionalInfoForm = this.generateAdditionalInfoForm();
  }

  // Generate Additional Information Form
  generateAdditionalInfoForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      area: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      taxnumber: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*')]),
      manager: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      phoneCode: new FormControl('(+39 IT)', [Validators.required]),
      phone: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*')]),
    })
  }

  // Submit Additional Information Form
  submitAdditionalInfo(): void {

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
