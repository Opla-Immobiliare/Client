import { Component, Input } from '@angular/core';
import { PropertyCharacteristics } from '../../models/property-characteristics.model';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent {
  @Input() characteristics?: PropertyCharacteristics;
  @Input() squareMetters?: number;
  @Input() price?: number;
  @Input() propertyFor?: number;
  @Input() availableFrom?: string;

  getDate(val: string): string {
    let date = new Date(val);
    // console.log(date);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}
