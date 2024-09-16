import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  manageFavs(): void {
    console.log('Favs', 'Boom');
  }
}
