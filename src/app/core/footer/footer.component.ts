import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { findFlagUrlByNationality } from "node_modules/country-flags-svg/dist/index.cjs";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{ 
  private route = inject(Router);

  getCountryFlag(country: string): string{
    return findFlagUrlByNationality(country);
  }

  hideFooter(): string {
    if (this.route.url.includes('/shop/cart')) {
      return 'hidden';
    }
    return 'lg:flex';
  }

  ngOnInit(): void {
    this.hideFooter();
  }
}
