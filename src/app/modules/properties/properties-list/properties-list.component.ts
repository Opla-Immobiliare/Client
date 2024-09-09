import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  pageForm: FormGroup;

  constructor() {
    this.pageForm = this.generatePageForm();
  }

  generatePageForm(): FormGroup {
    return new FormGroup({

    })
  }

  changePage(): void {
    
  }

  ngOnInit(): void {}
}
