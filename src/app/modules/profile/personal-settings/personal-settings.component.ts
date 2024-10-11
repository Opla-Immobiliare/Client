import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
import { UserSettings } from '../models/user-settings.model';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss']
})
export class PersonalSettingsComponent implements OnInit {
  user?: UserSettings;
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Check if IsCompletedProfile
    if (!this.profileService.isCompletedProfile()) this.router.navigateByUrl('/profile/complete');

    this.profileService.getUserSettings().subscribe(res => this.user = res);
  }
}
