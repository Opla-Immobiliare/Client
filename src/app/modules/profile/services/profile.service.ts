import { inject, Injectable } from '@angular/core';
import { User } from '../../auth/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient);

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

  setProfileAsCompleted() {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const user: User = JSON.parse(USER_PROFILE);
      user.completedProfile = true;
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  completeProfile(obj: any) {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const USER: User = JSON.parse(USER_PROFILE);
      const headers = { 'Authorization': `Bearer ${USER.token}` };

      return this.http.put<User>(`${environment.apiUrl}/User/complete`, obj, {headers: headers});
    } else {
      throw new Error('Unauthorized');
    }
  }
}
