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
import { AddPropertyComponent } from './add-property/add-property.component';
import { TypeComponent } from './add-property/type/type.component';
import { CharacteristicsComponent } from './add-property/characteristics/characteristics.component';
import { GeneralInfoComponent } from './add-property/general-info/general-info.component';
import { ReviewComponent } from './add-property/review/review.component';
import { DetailsTableComponent } from './property/details-table/details-table.component';

export const routes: Routes = [
  {
    path: 'comune/:municipality',
    component: PropertiesListComponent
  },
  {
    path: 'property/:id',
    component: PropertyComponent
  },
  {
    path: 'add',
    component: AddPropertyComponent
  }
]

@NgModule({
  declarations: [
    PropertiesListComponent,
    FiltersComponent,
    PropertyCardComponent,
    PropertyComponent,
    CarouselComponent,
    FavouritesComponent,
    AddPropertyComponent,
    TypeComponent,
    CharacteristicsComponent,
    GeneralInfoComponent,
    ReviewComponent,
    DetailsTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PropertiesModule { }
