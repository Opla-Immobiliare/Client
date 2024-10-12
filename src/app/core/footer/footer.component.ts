import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { findFlagUrlByNationality } from "node_modules/country-flags-svg/dist/index.cjs";
import { Observable } from 'rxjs';
import { isLoggedIn } from 'src/app/modules/auth/services/auth.selectors';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AppState } from 'src/app/reducers';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{ 
  private route = inject(Router);
  private authService = inject(AuthService);
  private store = inject(Store<AppState>);

  isAgency: boolean = false;
  isLoggedIn$: Observable<boolean> | undefined;

  getCountryFlag(country: string): string{
    return findFlagUrlByNationality(country);
  }

  hideFooter(): string {
    if (this.route.url.includes('shop/cart')) {
      return 'hidden';
    }
    // if (this.route.url.includes('properties/add/new')) {
    //   return 'hidden';
    // }
    return 'lg:flex';
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.authService.isAgency.subscribe(val => this.isAgency = val);
  }
}
