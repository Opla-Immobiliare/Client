import { Component } from '@angular/core';
import { findFlagUrlByNationality } from "node_modules/country-flags-svg/dist/index.cjs";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public boom = findFlagUrlByNationality("Italian");
  
  getCountryFlag(country: string): string{
    return findFlagUrlByNationality(country);
  }
}
