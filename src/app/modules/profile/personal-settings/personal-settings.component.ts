import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.scss']
})
export class PersonalSettingsComponent implements OnInit {

  

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Check if IsCompletedProfile
    if (!this.profileService.isCompletedProfile()) this.router.navigateByUrl('/profile/complete');
  }
}
