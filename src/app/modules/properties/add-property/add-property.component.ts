import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  step: number = 2;
  barWidth: string = 'w-1/4';
  title: string = '1/4. Tipo di Annuncio';
  subTitle: string = 'Compila le seguenti informazioni per pubblicare il tuo annuncio.';

  constructor() {}

  nextStep(): void {
    switch (this.step) {
      case 1: 
        this.step = 2;
        this.barWidth = 'w-2/4';
        this.title = '2/4. Caratteristiche';
        this.subTitle = 'Compila le caratteristiche del tuo immobile.';
        break;
    }
  }
  ngOnInit(): void {}
}
