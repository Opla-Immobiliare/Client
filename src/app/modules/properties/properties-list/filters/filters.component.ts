import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filtersForm: FormGroup;

  constructor() {
    this.filtersForm = this.generateFiltersForm();
  }

  generateFiltersForm(): FormGroup {
    let date = new Date();
    return new FormGroup({
      searchType: new FormControl<string>("rent",[Validators.required]),
      minPrice: new FormControl<number | undefined>(undefined,[Validators.min(0)]),
      maxPrice: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      squareMeters: new FormControl<number | undefined>(undefined, [Validators.min(0)]),
      minRooms: new FormControl<number>(0, [Validators.min(0)]),
      maxRooms: new FormControl<number>(0, [Validators.min(0)]),
      minYear: new FormControl<number | undefined>(undefined, [Validators.max(date.getFullYear())]),
      maxYear: new FormControl<number>(date.getFullYear(), [Validators.max(date.getFullYear())]),
      energyClass: new FormControl<string>("low", [Validators.required]),
      furnished: new FormControl<boolean>(true)
    });
  }

  searchWithFilters(): void {
    console.log("Filters Object", this.filtersForm)
  }

  ngOnInit(): void {}
}
