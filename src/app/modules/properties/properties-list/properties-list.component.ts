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
  sortView: string = 'Last Updated';
  cityId?: number;
  filtersForm: FormGroup;

  // Views
  categories: boolean = false;
  showAreas: boolean = false;
  showSort: boolean = false;
  showPrice: boolean = false;

  // Filters
  minPrice?: number;
  maxPrice?: number;
  squareMeters?: number;
  minRooms?: number;
  maxRooms?: number;
  minConstYear?: number;
  maxConstYear?: number;
  energyClass?: string;

  typesWithCategories$: PropertyTypesWithCategories[] = [];
  activeCity?: ActiveCategoryModel;

  constructor(private propertyEntityService: PropertyEntityService, private route: ActivatedRoute) {
    this.filtersForm = this.generateFiltersForm();
    this.route.queryParams.subscribe(params => {
      // console.log("Params", params);
      this.areas = params['area'];
      // console.log("Areas",this.areas);
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
      minPrice: new FormControl<number | undefined>(undefined),
      maxPrice: new FormControl<number | undefined>(undefined),
      squareMeters: new FormControl<number | undefined>(undefined),
      minRooms: new FormControl<number>(0, [Validators.min(0)]),
      maxRooms: new FormControl<number>(0, [Validators.min(0)]),
      minYear: new FormControl<number | undefined>(undefined, [Validators.max(date.getFullYear())]),
      maxYear: new FormControl<number>(date.getFullYear(), [Validators.max(date.getFullYear())]),
      energyClass: new FormControl<string | undefined>(undefined),
      furnished: new FormControl<boolean>(true),
      categoryId: new FormControl(),
      category: new FormControl("Choose Category")
    })
  }

  ngOnInit(): void {
    this.loadProperties();
    this.getActiveCity();
    this.getCategories();
  }

  // LoadProperties
  loadProperties() {
    let params = new URLSearchParams();
    params.append('sort', this.sort);
    if (this.category) params.append('categoryId', this.category.toString());
    if (this.type) params.append('type', (this.type == 'rent') ? '0' : '1');
    if (this.minPrice) params.append('minPrice', this.minPrice.toString());
    if (this.maxPrice) params.append('maxPrice', this.maxPrice.toString());
    if (this.squareMeters) params.append('squareMeters', this.squareMeters.toString());
    if (this.minRooms) params.append('minRooms', this.minRooms.toString());
    if (this.maxRooms) params.append('maxRooms', this.maxRooms.toString());
    if (this.minConstYear) params.append('minConstYear', this.minConstYear.toString());
    if (this.maxConstYear) params.append('maxConstYear', this.maxConstYear.toString());
    if (this.areas) {
      if (Array.isArray(this.areas)) {
        this.areas.forEach(item => {
          params.append('areaId', item.toString());
        })
      }
      else {
        params.append('areaId', this.areas);
      }
    }
    if (this.energyClass) params.append('energyClass', this.energyClass);
    this.propertyDataService.getProperties(params.toString()).pipe(res => this.properties$ = res);
  }

  // Update Properties List
  updateProperties() {
    // Type
    if (this.type != this.filtersForm.value.type){ 
      this.type = this.filtersForm.value.type;
      this.loadProperties();
    }
    // Cateogry
    if (this.category != this.filtersForm.value.categoryId) {
      this.category = this.filtersForm.value.categoryId;
      this.loadProperties();
    }
    // MinPrice
    if (this.minPrice != this.filtersForm.value.minPrice) {
      this.minPrice = this.filtersForm.value.minPrice;
      this.loadProperties();
    }
    // MaxPrice
    if (this.maxPrice != this.filtersForm.value.maxPrice) {
      this.maxPrice = this.filtersForm.value.maxPrice;
      this.loadProperties();
    }
    // SquareMeters
    if (this.squareMeters != this.filtersForm.value.squareMeters) {
      this.squareMeters = this.filtersForm.value.squareMeters;
      this.loadProperties();
    }
    // MinConstYear
    if (this.minConstYear != this.filtersForm.value.minYear) {
      this.minConstYear = this.filtersForm.value.minYear;
      this.loadProperties();
    }
    // MaxConstYear
    if (this.maxConstYear != this.filtersForm.value.maxYear) {
      this.maxConstYear = this.filtersForm.value.maxYear;
      this.loadProperties();
    }
    // EnergyClass
    if (this.energyClass != this.filtersForm.value.energyClass) {
      this.energyClass = this.filtersForm.value.energyClass;
      this.loadProperties();
    }
  }

  // Get Active Cities
  getActiveCity(): void {
    if (this.cityId) {
      this.propertyService.getActiveCategories(this.cityId).subscribe(res => {
        this.activeCity = res;
        if (Array.isArray(this.areas)) {
          this.areas.forEach(item => {
            let found = this.activeCity!.areas.find(x => x.areaId == item);
            this.activeAreas.push(found!.area);
          });
        }
        else {
          if (this.areas) {
            let found = this.activeCity!.areas.find(x => x.areaId == <number>this.areas[0]);
            this.activeAreas.push(found!.area);
          }
        }
      });
    }    
  }

  // Patch Category
  patchCat(cat: PropertyCategories) {
    this.filtersForm.patchValue({
      categoryId: cat.id,
      category: cat.categoryName
    });
    this.categories = false;
    this.updateProperties();
  }

  // Set Sorting
  setSort(val: string, view: string): void {
    if (this.sort != val ) {
      this.sort = val;
      this.sortView = view;
      this.loadProperties();
    }
  }

  // Get Categories
  getCategories(): void {
    this.propertyService.getTypesWithCategories().subscribe(res => {
      if (this.category) {
        res.forEach(item  => {
          let catFound = item.propertyCategories.find(c => c.id == this.category);
          if (catFound) {
            this.filtersForm.patchValue({
              category: catFound.categoryName
            });
          }
        })
      }
      this.typesWithCategories$ = res;
    });
  }

  addArea(id: number) {
    if (Array.isArray(this.areas)) {
      this.areas.push(id);
    }
    else {
      this.activeAreas = [];
      if (this.areas) this.areas = [this.areas, id];
    }
    this.showAreas = false;
    this.loadProperties();
    this.getActiveCity();
  }

  resetForm(): void {
    this.filtersForm.reset({
      type: this.type,
      minPrice: undefined,
      maxPrice: undefined,
      squareMeters: undefined,
      minRooms: 0,
      maxRooms: 0,
      minYear: undefined,
      maxYear: undefined,
      energyClass: undefined,
      furnished: true,
      categoryId: undefined,
      category: "Choose Category"
    });
    this.updateProperties();
  }
}
