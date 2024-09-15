import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  generalInfoForm: FormGroup;

  constructor() {
    this.generalInfoForm = this.generateGeneralInfoForm();
  }

  generateGeneralInfoForm(): FormGroup {
    return new FormGroup({
      acceessFrom: new FormControl<string>('Street', [Validators.required]),
      accessibillity: new FormControl<string>('no', [Validators.required]),
      view: new FormControl<string>('no'),
      viewType: new FormControl<string>('Sea'),
      positioning: new FormControl<string>('Corner'),
      zone: new FormControl<string>('Residential'),
      
    });
  }

  labelControl(name: string): string {
    if (this.generalInfoForm.controls[name].valid && this.generalInfoForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.generalInfoForm.controls[name].invalid && (this.generalInfoForm.controls[name].touched || this.generalInfoForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  updateGeneralInfoForm(): void {

  }

  ngOnInit(): void {}
}
