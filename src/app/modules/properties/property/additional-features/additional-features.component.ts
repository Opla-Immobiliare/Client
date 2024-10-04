import { Component, Input, OnInit } from '@angular/core';
import { PropertyAdditionalFeatures } from '../../models/property-additional-features.model';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-additional-features',
  templateUrl: './additional-features.component.html',
  styleUrls: ['./additional-features.component.scss']
})

export class AdditionalFeaturesComponent{

  @Input() features?: PropertyAdditionalFeatures;
}
