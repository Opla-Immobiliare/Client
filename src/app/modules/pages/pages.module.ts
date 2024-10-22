import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { IconsModule } from "../../shared/icons/icons.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessRegistrationComponent } from './business/business.component';
import { AuthModule } from '../auth/auth.module';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PropertyCategoriesEntityService } from './home/services/property-categories-entity.service';
import { PropertyCategoriesDataService } from './home/services/property-categories-data.service';
import { PropertyCategoriesResolver } from './home/services/property-categories.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      propertyTypesWithCategories: PropertyCategoriesResolver
    }
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'cookies-policy',
    component: CookiesPolicyComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'business',
    component: BusinessRegistrationComponent,
  }
]

// Entity metadata
const entityMetadata: EntityMetadataMap = {
  PropertyTypesWithCategories: {},
};

@NgModule({
  declarations: [
    ContactComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    CookiesPolicyComponent,
    HomeComponent,
    NotFoundComponent,
    BusinessRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    PropertyCategoriesEntityService,
    PropertyCategoriesDataService,
    PropertyCategoriesResolver
  ]
})
export class PagesModule {
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService, private propertyCategoriesService: PropertyCategoriesDataService) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('PropertyTypesWithCategories', propertyCategoriesService);
  }
}
