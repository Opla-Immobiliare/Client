import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/modules/auth/services/auth.actions';
import { isLoggedIn, isLoggedOut } from 'src/app/modules/auth/services/auth.selectors';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-top-right-action',
  templateUrl: './top-right-action.component.html',
  styleUrls: ['./top-right-action.component.scss']
})
export class TopRightActionComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );

    console.log("LoggedIn", this.isLoggedIn$);
  }
  
  // Logout
  logout(): void {
    this.store.dispatch(logout());
  }
}
