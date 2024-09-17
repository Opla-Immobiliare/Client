import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanModel } from './models/loan.model';

import localeIt  from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit{
  
  loanForm: FormGroup;
  loan: LoanModel | undefined;

  constructor() {
    this.loanForm = new FormGroup({
      propertyPrice: new FormControl<number>({value: 120000, disabled: true}),
      mortageAmount: new FormControl<number>(90000),
      mortageRate: new FormControl<number>(3),
      mortageDuration: new FormControl<number>(20)
    });
  }

  calculateLoan(): void {
    let rate = (this.loanForm.value.mortageRate / 100) + 1;
    this.loan = {
      monthly: (this.loanForm.value.mortageAmount * rate) / (12 * this.loanForm.value.mortageDuration),
      advance: (this.loanForm.value.mortageAmount * rate) - this.loanForm.value.mortageAmount,
      mutual: this.loanForm.value.mortageAmount * rate
    }
  }

  ngOnInit(): void {
    this.calculateLoan();
  }
}
