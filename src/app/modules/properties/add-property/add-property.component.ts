import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddPropertyDataService } from './sevices/add-property.data.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  step: number = 1;
  barWidth: string = 'w-1/4';
  title: string = '1/4. Ad Type';
  subTitle: string = 'Fill in the following information to post your ad.';
  next: string = 'Characteristics';

  typeForm: FormGroup; // TypeForm
  characteristicsForm: FormGroup; // CharacteristicsForm
  generalInfoForm: FormGroup; // GeneralInfoForm
next: any | undefined;

  constructor(private data: AddPropertyDataService) {
    this.typeForm = new FormGroup({});
    this.characteristicsForm = new FormGroup({});
    this.generalInfoForm = new FormGroup({});
  }

  nextStep(): void {
    switch (this.step) {
      case 1: 
        this.step = 2;
        this.barWidth = 'w-2/4';
        this.title = '2/4. Characteristics';
        this.subTitle = 'Fill in the characteristics of your property.';
        this.next = 'General Info';
        break;
      case 2: 
        this.step = 3;
        this.barWidth = 'w-3/4';
        this.title = '3/4. General Info';
        this.subTitle = 'Fill in the characteristics of your property';
        this.next = 'Review & Post';
        break;
      case 3:
        this.step = 4;
        this.barWidth = 'w-4/4';
        this.title = '4/4. Review';
        this.subTitle = 'Check if everything is correct and let\'s proceed with publishing!';
        break;
    }
  }

  ngOnInit(): void {
    this.data.typeFormSource.subscribe(typeForm => this.typeForm = typeForm);
    this.data.typeFormSource.subscribe(charForm => this.characteristicsForm = charForm);
    this.data.generalInfoFormSource.subscribe(generalInfoForm => this.generalInfoForm = generalInfoForm);
  }
}
