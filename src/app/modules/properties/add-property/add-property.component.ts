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
  title: string = '1/4. Tipo di Annuncio';
  subTitle: string = 'Compila le seguenti informazioni per pubblicare il tuo annuncio.';
  next: string = 'Caratteristiche';

  typeForm: FormGroup; // TypeForm
  characteristicsForm: FormGroup; // CharacteristicsForm
  generalInfoForm: FormGroup; // GeneralInfoForm
  next: any | undefined = [];

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
        this.title = '2/4. Caratteristiche';
        this.subTitle = 'Compila le caratteristiche del tuo immobile.';
        this.next = 'Informazioni Generali';
        break;
      case 2: 
        this.step = 3;
        this.barWidth = 'w-3/4';
        this.title = '3/4. Informazioni Generali';
        this.subTitle = 'Compila le caratteristiche del tuo immobile.';
        this.next = 'Riveda & Pubblica';
        break;
      case 3:
        this.step = 4;
        this.barWidth = 'w-4/4';
        this.title = '4/4. Revisione';
        this.subTitle = 'Controlli che tutto sia corretto e procediamo con la pubblicazione!';
        break;
    }
  }

  ngOnInit(): void {
    this.data.typeFormSource.subscribe(typeForm => this.typeForm = typeForm);
    this.data.typeFormSource.subscribe(charForm => this.characteristicsForm = charForm);
    this.data.generalInfoFormSource.subscribe(generalInfoForm => this.generalInfoForm = generalInfoForm);
  }
}
