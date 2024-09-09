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
    return new FormGroup({
      statusType: new FormControl<string>("rent",[Validators.required])
    })
  }

  ngOnInit(): void {}
}
