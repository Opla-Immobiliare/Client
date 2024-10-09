import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './services/profile.service';
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';
import { Profile } from './models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private authService = inject(AuthService);
  user$: Observable<Profile> = new Observable<Profile>();
  isUser: boolean = false;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Check if Completed Profile
    if (!this.profileService.isCompletedProfile()) this.router.navigateByUrl('/profile/complete');
    else this.profileService.getUser().pipe(res => this.user$ = res);
    this.authService.isUser.subscribe(val => this.isUser = val);
  }
}
