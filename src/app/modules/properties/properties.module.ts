import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { FiltersComponent } from './properties-list/filters/filters.component';
import { PropertyCardComponent } from './properties-list/property-card/property-card.component';
import { PropertyComponent } from './property/property.component';



@NgModule({
  declarations: [
    PropertiesListComponent,
    FiltersComponent,
    PropertyCardComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PropertiesModule { }
