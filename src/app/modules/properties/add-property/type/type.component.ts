import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})

export class TypeComponent implements OnInit {

  typeForm: FormGroup;

  constructor() {
    this.typeForm = this.generateFormType();
  }

  // GenerateTypeForm
  generateFormType(): FormGroup {
    return new FormGroup({
      rentOrSale: new FormControl("buy", [Validators.required]),
      propertyType: new FormControl("1", [Validators.required]),
      propertyCategory: new FormControl(undefined, [Validators.required]),
      category: new FormControl("Choose category", [Validators.required]),
      comune: new FormControl("Choose comune", [Validators.required])
    });
  }

  ngOnInit(): void {}
}
