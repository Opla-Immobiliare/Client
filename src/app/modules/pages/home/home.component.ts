import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchCriteria } from './models/searchCriteria.model';
import { SearchCriteriaService } from './services/search-criteria-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  areasForm: FormGroup;
  searchCriteriaModel: SearchCriteria | undefined;

  constructor(private searchCriteriaService: SearchCriteriaService) {
    this.searchForm = this.generateSearchForm();
    this.areasForm = this.generateAreasForm();
  }

  generateSearchForm(): FormGroup {
    return new FormGroup({
      searchType: new FormControl<string>("rent", [Validators.required]),
      category: new FormControl<string>("All", [Validators.required]),
      municipality: new FormControl<string | undefined>(undefined, [Validators.required])
    })
  }

  generateAreasForm(): FormGroup {
    return new FormGroup({
      areas: new FormArray([])
    })
  }

  searchCriteria(): void {
    console.log('AreasForm', this.areasForm.value)
    this.searchCriteriaModel!.searchType = this.searchForm.value.searchType;
    this.searchCriteriaModel!.category = this.searchForm.value.category;
    this.searchCriteriaModel!.municipality = this.searchForm.value.municipality;
    this.searchCriteriaModel!.areas = this.areasForm.value.areas;
    console.log('SearchCriteria', this.searchCriteriaModel);
    this.searchCriteriaService.updateSearchCriterria(this.searchCriteriaModel!);
  }

  ngOnInit(): void {}
}
