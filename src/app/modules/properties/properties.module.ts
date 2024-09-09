import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { FiltersComponent } from './properties-list/filters/filters.component';
import { PropertyCardComponent } from './properties-list/property-card/property-card.component';
import { PropertyComponent } from './property/property.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './properties-list/property-card/carousel/carousel.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: ':municipality',
    component: PropertiesListComponent
  },
  {
    path: 'property/:id',
    component: PropertyComponent
  }
]

@NgModule({
  declarations: [
    PropertiesListComponent,
    FiltersComponent,
    PropertyCardComponent,
    PropertyComponent,
    CarouselComponent,
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PropertiesModule { }
