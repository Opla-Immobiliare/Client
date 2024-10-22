import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyEntityService } from '../services/property-entity.service';
import { Observable, pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PropertiesDataService } from '../services/properties-data.service';
import { PropertyList } from '../models/property-list.model';
import { PropertyTypesWithCategories } from '../../pages/home/models/propertyTypesWithCategories.model';
import { PropertyCategoriesEntityService } from '../../pages/home/services/property-categories-entity.service';
import { PropertyCategoriesDataService } from '../../pages/home/services/property-categories-data.service';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {
  private propertyDataService = inject(PropertiesDataService);
  private propertyCategories = inject(PropertyService);

  properties$: Observable<PropertyList[] | undefined> = new Observable<PropertyList[]>;
  areas: number[] = [];
  type?: string;
  category?: number;
  sort: string = 'dateDesc';
  filtersForm: FormGroup;
  categories: boolean = false;
  typesWithCategories$: Observable<PropertyTypesWithCategories[]> = new Observable<PropertyTypesWithCategories[]>();

  constructor(private propertyEntityService: PropertyEntityService, private route: ActivatedRoute) {
    this.filtersForm = this.generateFiltersForm();
    this.route.queryParams.subscribe(params => {
      // console.log("Params", params);
      this.areas = params['area'];
      this.category = params['category'];
      this.type = params['type'];
      if (this.type) {
        // console.log("here")
        this.filtersForm.patchValue({
          type: this.type
        })
      }
    })
  }

  generateFiltersForm(): FormGroup {
    let date = new Date();
    return new FormGroup({
      type: new FormControl(),
      searchType: new FormControl<string>("rent", [Validators.required]),
      minPrice: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      maxPrice: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      squareMeters: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      minRooms: new FormControl<number>(0, [Validators.min(0)]),
      maxRooms: new FormControl<number>(0, [Validators.min(0)]),
      minYear: new FormControl<number | undefined>(undefined, [Validators.max(date.getFullYear())]),
      maxYear: new FormControl<number>(date.getFullYear(), [Validators.max(date.getFullYear())]),
      energyClass: new FormControl<string>("low", [Validators.required]),
      furnished: new FormControl<boolean>(true)
    })
  }

  ngOnInit(): void {
    this.loadProperties();
    // console.log("Properties", this.properties$);
    this.propertyCategories.getTypesWithCategories().pipe(res => this.typesWithCategories$ = res);
  }

  loadProperties() {
    // console.log('Area', this.areas)
    // console.log('Type', this.type)
    // console.log('Category', this.category)
    // console.log('Sort', this.sort)

    let params = new URLSearchParams();
    params.append('sort', this.sort);
    if (this.category) params.append('categoryId', /*this.category.toString()*/ '1');
    if (this.type) params.append('type', (this.type == 'rent') ? '0' : '1');
    params.append('areaId', /*this.areas[0].toString()*/ '2');
    
    // console.log("QueryParams", params.toString());
    this.propertyDataService.getProperties(params.toString()).pipe(res => this.properties$ = res);
  }
}
