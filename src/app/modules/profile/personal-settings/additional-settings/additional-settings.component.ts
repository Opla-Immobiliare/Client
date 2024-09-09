import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-settings',
  templateUrl: './additional-settings.component.html',
  styleUrls: ['./additional-settings.component.scss']
})
export class AdditionalSettingsComponent implements OnInit {

  promotionForm: FormGroup;

  constructor () {
    this.promotionForm = this.generatePromotionsGroup();
  }

  generatePromotionsGroup(): FormGroup{
    return new FormGroup({
      promotional: new FormControl(undefined, [Validators.required])
    })
  }

  test(): void {
    console.log('Promotional', this.promotionForm.value.promotional);
  }

  ngOnInit(): void {}
}
