import { keyframes } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../auth/models/user.model';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../../auth/services/auth.service';

const countryCodes = require('country-codes-list');

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})

export class CompleteProfileComponent implements OnInit {
  private authService = inject(AuthService);

  additionalInfoForm: FormGroup;
  countryCodesList = countryCodes.customList('countryCallingCode', '(+{countryCallingCode} {countryCode})');
  monthValue = "";
  isAgency: boolean = false;
  isUser: boolean = false;

  constructor(private router: Router, private profileService: ProfileService) {
    this.additionalInfoForm = this.generateAdditionalInfoForm();
  }

  // Generate Additional Information Form
  generateAdditionalInfoForm(): FormGroup {
    let date = new Date();
    return new FormGroup({
      name: new FormControl(undefined, [Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(undefined, [Validators.pattern('[a-zA-Z]*')]),
      phoneCode: new FormControl('(+39 IT)', [Validators.required]),
      phone: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*')]),
      day: new FormControl(date.getDate(), [Validators.max(31), Validators.min(1)]),
      month: new FormControl(this.setMonthValue(date.getMonth())),
      year: new FormControl(date.getFullYear() - 18, [Validators.min(date.getFullYear() - 120), Validators.max(date.getFullYear() - 18)]),
      companyName: new FormControl(undefined),
      country: new FormControl("Italy"),
      address: new FormControl(undefined),
      tinNumber: new FormControl(undefined),
      managersFullName: new FormControl(undefined, [Validators.pattern('[a-zA-Z ]*')]),
    })
  }

  // Submit Additional Information Form
  submitAdditionalInfo(): void {
    let name = "";
    if (this.additionalInfoForm.value.name == undefined && this.additionalInfoForm.value.lastname == undefined) {
      name = this.additionalInfoForm.value.managersFullName;
    }
    else {
      name = this.additionalInfoForm.value.name + " " + this.additionalInfoForm.value.lastname;
    }
    let obj = new Object({
      fullName: name,
      phoneNumber:  this.additionalInfoForm.value.phoneCod + this.additionalInfoForm.value.phone,
      dateOfBirth: `${this.additionalInfoForm.value.year}-${this.additionalInfoForm.value.month}-${this.additionalInfoForm.value.day}`,
      agency: {
        country: this.additionalInfoForm.value.country,
        address: this.additionalInfoForm.value.address,
        companyName: this.additionalInfoForm.value.companyName,
        tinNumber: this.additionalInfoForm.value.tinNumber,
      }
    });
    this.profileService.completeProfile(obj).subscribe(
      suc => {
        this.profileService.setProfileAsCompleted();
        if (this.isAgency) {
          this.router.navigateByUrl('/shop/plans');
        }
        else {
          this.router.navigateByUrl('/profile');
        }
      },
      err => {
        alert('An error Occured');
      }
    );
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
    this.authService.isAgency.subscribe(val => this.isAgency = val);
    this.authService.isUser.subscribe(val => this.isUser = val);
    // Check if Profile is Completed
    if (this.profileService.isCompletedProfile()) this.router.navigateByUrl('/profile');
  }
}
