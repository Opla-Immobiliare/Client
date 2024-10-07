import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPropertyDataService } from '../services/add-property.data.service';
import { map, Observable } from 'rxjs';
import { PropertyType } from '../models/propert-type.model';
import { PropertyTypeEntityService } from '../services/property-type-entity.service';
import { PropertyTypesDataService } from '../services/property-types-data.service';
import { PropertyCategory } from '../models/property-category.model';
import { Province } from '../models/province.model';
import { ProvinceEntityService } from '../services/province/province.entity.service';
import { Citta } from '../models/citta.model';
import { ProvincesDataService } from '../services/province/provinces-data.service';
import { Comune } from '../models/comune.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})

export class TypeComponent implements OnInit {
  private propertyTypeDataService = inject(PropertyTypesDataService);
  private provinceDataService = inject(ProvincesDataService);
  typeForm: FormGroup;
  propertyTypes$: Observable<PropertyType[] | null> = new Observable<PropertyType[]>;
  province$: Observable<Province[] | null> = new Observable<Province[]>;
  propertyCategories: PropertyCategory[] = [];
  cittas: Citta[] = [];
  comuni: Comune[] = []; 

  propertyCategory: boolean = false;
  province: boolean = false;
  citta: boolean = false;
  comune: boolean = false;

  constructor(private data: AddPropertyDataService, private propertyTypeService: PropertyTypeEntityService, private provinceService: ProvinceEntityService) {
    this.typeForm = this.generateFormType();
  }

  // GenerateTypeForm
  generateFormType(): FormGroup {
    return new FormGroup({
      rentOrSale: new FormControl("rent", [Validators.required]),
      propertyType: new FormControl(1, [Validators.required]),
      propertyCategory: new FormControl(undefined, [Validators.required]),
      category: new FormControl("Scegli categoria", [Validators.required]),
      province: new FormControl("Scegli province", [Validators.required]),
      citta: new FormControl("Scegli citta", [Validators.required]),
      comune: new FormControl("Scegli comune", [Validators.required]),
      address: new FormControl(undefined, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadCategory(1);
    this.propertyTypeService.entities$.pipe(res => this.propertyTypes$ = res);
    this.provinceService.entities$.pipe(res => this.province$ = res);
  }

  updateTypeForm(): void {
    this.data.changeTypeForm(this.typeForm);
    console.log(this.typeForm.value);
  }

  loadCategory(id: number) {
    this.propertyTypeDataService.getCategoriesByPropertyId(id).subscribe(res => {
      this.propertyCategories = res;
      
    });
  }

  changeProvince(item: Province): void {
    this.typeForm.value.province = item.province;
    this.updateTypeForm();
    this.province = false;
    this.provinceDataService.getCitta(item.id).subscribe(res => this.cittas = res);
  }

  setCitta(item: Citta): void {
    this.typeForm.value.citta = item.citta;
    this.updateTypeForm();
    this.citta = false;
    this.provinceDataService.getComune(item.id).subscribe(res => this.comuni = res);
  }

  setComune(item: Comune) {
    this.typeForm.value.comuni = item.comune;
    this.comune = false;
    this.updateTypeForm();
  }
}
