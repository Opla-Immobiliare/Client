import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-additional-settings',
  templateUrl: './additional-settings.component.html',
  styleUrls: ['./additional-settings.component.scss']
})
export class AdditionalSettingsComponent implements OnInit {
  private profileService = inject(ProfileService);
  promotionForm: FormGroup;
  @Input() receivePromotionalEmails: boolean = false;

  constructor () {
    this.promotionForm = this.generatePromotionsGroup();
  }

  generatePromotionsGroup(): FormGroup{
    return new FormGroup({
      promotional: new FormControl(false, [Validators.required])
    })
  }

  receivePromoEmails(): void {
    this.profileService.receivePromotionalEmails(this.promotionForm.value.promotional).subscribe();
  }

  ngOnInit(): void {
    this.promotionForm.patchValue({ promotional: this.receivePromotionalEmails });
  }
}
