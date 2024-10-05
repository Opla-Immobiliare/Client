import { Component, inject, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AppState } from './reducers';
import { select, Store } from '@ngrx/store';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { login } from './modules/auth/services/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from './modules/auth/services/auth.selectors';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);
  title = 'Opla Immobilliare';

  loading = true;

  isLoggedIn$: Observable<boolean> | undefined;

  isLoggedOut$: Observable<boolean> | undefined;

  constructor(private store: Store<AppState>, public router: Router) {}

  ngOnInit(): void {
    initFlowbite();

    const userProfile = localStorage.getItem("user");

    if (userProfile) {
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));
      let user = JSON.parse(userProfile);
      if (user.role == "agency") this.authService.setAgency(true);
      if (user.role == "user") this.authService.setUser(true);
    }

    // Loading
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }

        default: {
          break;
        }
      }
    });

    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
    }
}
