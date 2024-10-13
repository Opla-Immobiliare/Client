import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { ClipboardService } from 'ngx-clipboard';
import { ActivatedRoute } from '@angular/router';
import { PropertiesDataService } from '../services/properties-data.service';
import { Observable } from 'rxjs';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
import { PropertyService } from '../services/property.service';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  property$: Observable<Property> = new Observable<Property>;
  photoGallery: boolean = false;
  imageIndex: number = 1;

  constructor(
    private clipboard: ClipboardService,
    private propertyEntityService: PropertiesDataService,
    private route: ActivatedRoute,
    public propertyService: PropertyService
  ) {}

  // Copy to clipboard
  copyToClipboard(id: string): void {
    this.clipboard.copy(id);
  }

  ngOnInit(): void {
    const PROPERTY_ID = this.route.snapshot.paramMap.get('id');

    this.propertyEntityService.getById(PROPERTY_ID!).pipe(data => this.property$ = data);
    // console.log('Property', this.property$);
  }

  getDate(val: string): string {
    let date = new Date(val);
    // console.log(date);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}