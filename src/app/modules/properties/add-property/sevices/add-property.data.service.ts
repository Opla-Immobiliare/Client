import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPropertyDataService {

  // Type
  private typeForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
  typeFormSource = this.typeForm.asObservable();

  // Characteristics
  private characteristicsForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
  characteristicsFormSource = this.characteristicsForm.asObservable();

  // General Information
  private generalInfoForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
  generalInfoFormSource = this.generalInfoForm.asObservable();

  constructor() { }

  // Type form
  changeTypeForm(form: FormGroup): void {
    this.typeForm.next(form);
    // console.log('Service Form', form.value)
  }

  // Characteristics form
  changeCharacteristicsForm(form: FormGroup): void {
    this.characteristicsForm.next(form);
    // console.log('Service Form', form.value)
  }

  // GeneralInfo form
  changeGeneralInfoForm(form: FormGroup): void {
    this.generalInfoForm.next(form);
    console.log('Service Form', form.value)
  }

}
