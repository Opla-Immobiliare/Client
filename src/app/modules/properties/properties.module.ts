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
import { ClipboardModule } from 'ngx-clipboard';
import { LoanComponent } from './property/loan/loan.component';
import { AdditionalFeaturesComponent } from './property/additional-features/additional-features.component';
import { SimilarPropertiesComponent } from './property/similar-properties/similar-properties.component';
import { InterestComponent } from './property/interest/interest.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PropertiesDataService, } from './services/properties-data.service';
import { PropertyEntityService } from './services/property-entity.service';
import { PropertyTypeEntityService } from './add-property/services/property-type-entity.service';
import { PropertyTypesDataService } from './add-property/services/property-types-data.service';
import { PropertyTypesResolver } from './add-property/services/propertyTypes.resolver';
import { ProvinceEntityService } from './add-property/services/province/province.entity.service';
import { ProvinceResolver } from './add-property/services/province/province.resolver';
import { ProvincesDataService } from './add-property/services/province/provinces-data.service';
import { PropertyCategoriesEntityService } from '../pages/home/services/property-categories-entity.service';
import { PropertyCategoriesDataService } from '../pages/home/services/property-categories-data.service';

export const routes: Routes = [
  {
    path: ':municipality',
    component: PropertiesListComponent
  },
  {
    path: ':municipality/property/:id',
    component: PropertyComponent
  },
  {
    path: 'add/new',
    component: AddPropertyComponent,
    resolve: {
      propertyType: PropertyTypesResolver,
      province: ProvinceResolver
    },
    canActivate: [AuthGuard],
  }
]

// Entity metadata
const entityMetadata: EntityMetadataMap = {
  Property: {},
  PropertyType: {},
  Province: {},
};

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
    LoanComponent,
    AdditionalFeaturesComponent,
    SimilarPropertiesComponent,
    InterestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [
    PropertiesDataService,
    PropertyEntityService,
    PropertyTypeEntityService,
    PropertyTypesDataService,
    PropertyTypesResolver,
    ProvinceEntityService,
    ProvinceResolver,
    ProvincesDataService
  ]
})
export class PropertiesModule {

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private propertiesService: PropertiesDataService,
    private propertyTypes: PropertyTypesDataService,
    private provinceService: ProvincesDataService,
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Property', propertiesService);
    entityDataService.registerService('PropertyType', propertyTypes);
    entityDataService.registerService('Province', provinceService);
  }
}
