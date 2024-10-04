import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  interestForm: FormGroup;
  enableInterestForm: boolean = false;

  constructor(public propertyService: PropertyService) {
    this.interestForm = new FormGroup({
      fullName: new FormControl<string | undefined>(undefined, [Validators.required]),
      email: new FormControl<string | undefined>(undefined, [Validators.required]),
      message: new FormControl<string | undefined>(undefined, [Validators.required]),
      call: new FormControl<boolean>(true),
      callTime: new FormControl<string | undefined>('morning'),
      mobilePhone: new FormControl<string | undefined>(undefined)
    });
  }

  submitInterestRequest(): void {
    
  }

  labelControl(name: string): string {
    if (this.interestForm.controls[name].valid && this.interestForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.interestForm.controls[name].invalid && (this.interestForm.controls[name].touched || this.interestForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  ngOnInit(): void {
    this.propertyService.enableInterestFormSource.subscribe(val => this.enableInterestForm = val);
  }
}
