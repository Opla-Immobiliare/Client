import { Injectable } from '@angular/core';
import { User } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  isCompletedProfile(): boolean {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const user: User = JSON.parse(USER_PROFILE);
      if (user.completedProfile) {
        return true;
      }
      return false;
    }
    return false;
  }
}
