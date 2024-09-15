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

  constructor(private data: AddPropertyDataService) {
    this.typeForm = new FormGroup({});
    this.characteristicsForm = new FormGroup({});
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
    }
  }

  ngOnInit(): void {
    this.data.typeFormSource.subscribe(typeForm => this.typeForm = typeForm);
    this.data.typeFormSource.subscribe(charForm => this.characteristicsForm = charForm);
  }
}
