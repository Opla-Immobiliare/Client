import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyEntityService } from '../services/property-entity.service';
import { map, Observable, pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PropertiesDataService } from '../services/properties-data.service';
import { PropertyList } from '../models/property-list.model';
import { PropertyCategories, PropertyTypesWithCategories } from '../../pages/home/models/propertyTypesWithCategories.model';
import { PropertyCategoriesEntityService } from '../../pages/home/services/property-categories-entity.service';
import { PropertyCategoriesDataService } from '../../pages/home/services/property-categories-data.service';
import { PropertyService } from '../services/property.service';
import { ActiveCategoryModel } from '../models/active-category.model';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {
  private propertyDataService = inject(PropertiesDataService);
  private propertyService = inject(PropertyService);

  properties$: Observable<PropertyList[] | undefined> = new Observable<PropertyList[]>;
  areas: number[] = [];
  activeAreas: string[] = [];
  type?: string;
  category?: number;
  sort: string = 'dateDesc';
  cityId?: number;
  filtersForm: FormGroup;
  categories: boolean = false;
  showAreas: boolean = false;
  showSort: boolean = false;
  typesWithCategories$: Observable<PropertyTypesWithCategories[]> = new Observable<PropertyTypesWithCategories[]>();
  activeCity?: ActiveCategoryModel;

  constructor(private propertyEntityService: PropertyEntityService, private route: ActivatedRoute) {
    this.filtersForm = this.generateFiltersForm();
    this.route.queryParams.subscribe(params => {
      // console.log("Params", params);
      this.areas = params['area'];
      this.category = params['category'];
      this.type = params['type'];
      this.cityId = params['cityId'];
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
      minPrice: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      maxPrice: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      squareMeters: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      minRooms: new FormControl<number>(0, [Validators.min(0)]),
      maxRooms: new FormControl<number>(0, [Validators.min(0)]),
      minYear: new FormControl<number | undefined>(undefined, [Validators.max(date.getFullYear())]),
      maxYear: new FormControl<number>(date.getFullYear(), [Validators.max(date.getFullYear())]),
      energyClass: new FormControl<string>("low", [Validators.required]),
      furnished: new FormControl<boolean>(true),
      categoryId: new FormControl(),
      category: new FormControl()
    })
  }

  ngOnInit(): void {
    this.loadProperties();
    this.getActiveCity();
    // console.log("Properties", this.properties$);
    this.propertyService.getTypesWithCategories().pipe(res => this.typesWithCategories$ = res);
  }

  loadProperties() {
    // console.log('Area', this.areas)
    // console.log('Type', this.type)
    // console.log('Category', this.category)
    // console.log('Sort', this.sort)

    let params = new URLSearchParams();
    params.append('sort', this.sort);
    if (this.category) params.append('categoryId', this.category.toString());
    if (this.type) params.append('type', (this.type == 'rent') ? '0' : '1');
    params.append('areaId', /*this.areas[0].toString()*/ '2');
    
    // console.log("QueryParams", params.toString());
    this.propertyDataService.getProperties(params.toString()).pipe(res => this.properties$ = res);
  }

  updateProperties() {
    if (this.type != this.filtersForm.value.type){ 
      this.type = this.filtersForm.value.type;
      this.loadProperties();
    }
    if (this.category != this.filtersForm.value.categoryId) {
      this.category = this.filtersForm.value.categoryId;
      this.loadProperties();
    } 
  }

  getActiveCity(): void {
    if (this.cityId) {
      this.propertyService.getActiveCategories(this.cityId).subscribe(res => {
        this.activeCity = res;
        this.areas.forEach(item => {
          // console.log("Item", item);
          // console.log("Areas", this.activeCity?.areas)
          let found = this.activeCity!.areas.find(x => x.areaId == item);
          this.activeAreas.push(found!.area);
          // console.log("Found", found);
        })
      });
      // console.log(this.activeAreas);
    }    
  }

  patchCat(cat: PropertyCategories) {
    this.filtersForm.patchValue({
      categoryId: cat.id,
      category: cat.categoryName
    });
    this.categories = false;
    // console.log("FiltersForm", this.filtersForm.value);
    this.updateProperties();
  }

  setSort(val: string): void {
    if (this.sort != val ) {
      this.sort = val;
      this.loadProperties();
    }
  }
}
