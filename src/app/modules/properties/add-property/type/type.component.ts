import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPropertyDataService } from '../sevices/add-property.data.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})

export class TypeComponent implements OnInit {

  typeForm: FormGroup;

  constructor(private data: AddPropertyDataService) {
    this.typeForm = this.generateFormType();
  }

  // GenerateTypeForm
  generateFormType(): FormGroup {
    return new FormGroup({
      rentOrSale: new FormControl("vendita", [Validators.required]),
      propertyType: new FormControl("1", [Validators.required]),
      propertyCategory: new FormControl(undefined, [Validators.required]),
      category: new FormControl("Scegli categoria", [Validators.required]),
      comune: new FormControl("Scegli comune", [Validators.required]),
      area: new FormControl("Scegli zona", [Validators.required]),
      address: new FormControl(undefined, [Validators.required])
    });
  }

  ngOnInit(): void {}

  updateTypeForm(): void {
    this.data.changeTypeForm(this.typeForm);
  }
}
