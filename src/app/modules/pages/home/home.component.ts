import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchCriteria } from './models/searchCriteria.model';
import { SearchCriteriaService } from './services/search-criteria-service.service';
import { Observable } from 'rxjs';
import { CittaEComune } from './models/cittaEComune.model';
import { SearchService } from './services/search.service';
import { PropertyCategories, PropertyTypesWithCategories } from './models/propertyTypesWithCategories.model';
import { PropertyCategoriesEntityService } from './services/property-categories-entity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private searchService = inject(SearchService);
  private propertyCategories = inject(PropertyCategoriesEntityService);
  private router = inject(Router);

  searchForm: FormGroup;
  searchCriteriaModel?: SearchCriteria;
  areas: string[] = [];
  isfrmChecked: any;
  categories: string[] = [];
  isCatChecked: any;

  cittaEComune$: CittaEComune[] = [];
  typesWithCategories$: Observable<PropertyTypesWithCategories[]> = new Observable<PropertyTypesWithCategories[]>();

  areasModal: boolean = false;
  categoriesModal: boolean = false;
  categoriesDropdown: boolean = false;

  constructor(private searchCriteriaService: SearchCriteriaService) {
    this.searchForm = this.generateSearchForm();
  }

  generateSearchForm(): FormGroup {
    return new FormGroup({
      searchType: new FormControl<string>("rent"),
      category: new FormControl<string>("All"),
      categoryId: new FormControl<number>(0),
      municipality: new FormControl<string | undefined>(undefined, [Validators.required]),
      municipalityId: new FormControl()
    })
  }

  searchCriteria(): void {
    let params = new URLSearchParams();
    this.areas.forEach(res => {
      params.append("area", res);
    });
    this.searchCriteriaModel = {
      searchType: this.searchForm.value.searchType,
      areas: params.toString(),
      category: this.searchForm.value.categoryId,
      municipality: this.searchForm.value.municipality,
    }
    console.log('SearchCriteria', this.searchCriteriaModel);
    this.searchCriteriaService.updateSearchCriterria(this.searchCriteriaModel!);
    this.router.navigateByUrl(`/properties/${this.cittaEComune$[0].citta}?${this.searchCriteriaModel.areas}&category=${this.searchCriteriaModel.category}&type=${this.searchCriteriaModel.searchType}&cityId=${this.cittaEComune$[0].cittaId}`);
  }

  ngOnInit(): void {
    this.propertyCategories.entities$.pipe(res => this.typesWithCategories$ = res);
  }

  getCittaEComune(): void {
    if (this.searchForm.value.municipality != undefined && this.searchForm.value.municipality.length >= 4) {
      // console.log("Here I am!!");
      this.searchService.getComune(this.searchForm.value.municipality).subscribe( res =>{
        this.cittaEComune$ = res;
        // this.searchForm.patchValue({
        //   municipality: res[0].citta,
        //   municipalityId: res[0].cittaId
        // })
      });
    }
  }


  addAreas(event: any, isChecked: boolean) {
    if (isChecked) {
      this.areas.push(event.target.value);
    }
    else {
      let index = this.areas.indexOf(event.target.value);
      this.areas.splice(index, 1);
    }
  }

  setCategory(val: PropertyCategories): void {
    this.searchForm.patchValue({
      category: val.categoryName,
      categoryId: val.id,
    });
    this.categoriesModal = false;
    this.categoriesDropdown = false;
  }
}
