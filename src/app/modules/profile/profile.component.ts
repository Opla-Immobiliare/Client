import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Check if Completed Profile
    if (!this.profileService.isCompletedProfile()) this.router.navigateByUrl('/profile/complete');

    
  }
}
