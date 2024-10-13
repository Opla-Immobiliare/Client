import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "../../auth/models/user.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class FavoritesService {
    private http = inject(HttpClient);

    addOrRemoveFromFavorites(propertyId: number) {
        const USER_PROFILE = localStorage.getItem('user');
        if (USER_PROFILE) {
            const USER: User = JSON.parse(USER_PROFILE);
            const headers = { 'Authorization': `Bearer ${USER.token}` };
            this.http.post(`${environment.apiUrl}/favorites?id=${propertyId}`, null, { headers: headers });
        } else {
            throw new Error('Unauthorized');
        }
    }
}