import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/modules/auth/services/auth.actions';
import { isLoggedIn, isLoggedOut } from 'src/app/modules/auth/services/auth.selectors';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-top-right-action',
  templateUrl: './top-right-action.component.html',
  styleUrls: ['./top-right-action.component.scss']
})
export class TopRightActionComponent implements OnInit {
  private authService = inject(AuthService);

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;
  isAgency: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.authService.isAgency.subscribe(val => this.isAgency = val);
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );

    
  }
  
  // Logout
  logout(): void {
    this.store.dispatch(logout());
    this.authService.setAgency(false);
    this.authService.setUser(false);
  }
}
