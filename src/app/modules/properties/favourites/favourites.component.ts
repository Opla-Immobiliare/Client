import { Component, inject, Input } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  private favService = inject(FavoritesService);
  @Input() propertyId?: number;

  manageFavs(): void {
    this.favService.addOrRemoveFromFavorites(this.propertyId!);
  }
}
