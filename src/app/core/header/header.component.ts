import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from 'src/app/modules/auth/services/auth.selectors';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;

  constructor(private route: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
  }

  hideHeader(): string {
    if (this.route.url.includes('property')) {
      return 'hidden lg:flex';
    }

    return 'flex';
  }
}
