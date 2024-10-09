import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../../models/profile.model';
import { UserProperty } from '../../models/user-property.model';
import { ProfileService } from '../../services/profile.service';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit{
  profileService = inject(ProfileService);

  adForm: FormGroup;
  @Input() user?: Profile;
  properties: UserProperty[] = [];
  page: number = 1;

  constructor() {
    this.adForm = this.generateAdForm();
  }

  generateAdForm(): FormGroup {
    return new FormGroup({
      status: new FormControl('1',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.getUserProperties();
  }

  getUserProperties():void {
    this.profileService.getUserProperties(this.page).subscribe(res => {
      res.forEach(prop => {
        this.properties.push(prop);
      })
    });
  }

  loadMoreProperties() {
    this.page++;
    this.getUserProperties();
  }
}
