import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit{

  adForm: FormGroup;

  constructor() {
    this.adForm = this.generateAdForm();
  }

  generateAdForm(): FormGroup {
    return new FormGroup({
      status: new FormControl('1',[Validators.required])
    })
  }

  ngOnInit(): void {}
}
