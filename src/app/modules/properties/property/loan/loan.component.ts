import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanModel } from './models/loan.model';

import localeIt  from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
import { RightArrowIconComponent } from 'src/app/shared/icons/right-arrow-icon/right-arrow-icon.component';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent{
  
  loanForm: FormGroup;
  loan: LoanModel | undefined;
  showLoan: boolean = true;

  @Input() propertyPrice?: number;

  constructor() {
    this.loanForm = this.generateForm();
  }

  calculateLoan(): void {
    let rate = (this.loanForm.value.mortageRate / 100) + 1;
    this.loan = {
      monthly: (this.loanForm.value.mortageAmount * rate) / (12 * this.loanForm.value.mortageDuration),
      advance: (this.loanForm.value.mortageAmount * rate) - this.loanForm.value.mortageAmount,
      mutual: this.loanForm.value.mortageAmount * rate
    }
  }

  generateForm(): FormGroup {
    let mortageAm = this.propertyPrice! - (30 / 100 * this.propertyPrice!);
    return new FormGroup({
      propertyPrice: new FormControl(),
      mortageAmount: new FormControl<number>(0),
      mortageRate: new FormControl<number>(3),
      mortageDuration: new FormControl<number>(20)
    });
  }

  showHideLoan(): void {
    if (this.showLoan) {
      this.showLoan = false;
    } else {
      this.showLoan = true;
    }
  }
}
