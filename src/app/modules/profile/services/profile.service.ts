import { inject, Injectable } from '@angular/core';
import { User } from '../../auth/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile.model';
import { UserProperty } from '../models/user-property.model';
import { Observable } from 'rxjs';

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

  getUser() {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const USER: User = JSON.parse(USER_PROFILE);
      const headers = { 'Authorization': `Bearer ${USER.token}` };

      return this.http.get<Profile>(`${environment.apiUrl}/User`, { headers: headers });
    } else {
      throw new Error('Unauthorized');
    }
  }

  getUserProperties(page: number): Observable<UserProperty[]> {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const USER: User = JSON.parse(USER_PROFILE);
      const headers = { 'Authorization': `Bearer ${USER.token}` };
      return this.http.get<UserProperty[]>(`${environment.apiUrl}/User/properties?page=${page}`, {headers: headers});
    } else {
      throw new Error('Unauthorized');
    }
  }

}
