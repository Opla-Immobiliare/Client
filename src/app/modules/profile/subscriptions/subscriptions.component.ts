import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Check if ProfileIsCompleted
    if(!this.profileService.isCompletedProfile()) this.router.navigateByUrl('/profile/complete');
  }
}
