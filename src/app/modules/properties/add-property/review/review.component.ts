import { Component, OnInit } from '@angular/core';
import { AddPropertyDataService } from '../sevices/add-property.data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  typeFormGroup: FormGroup = new FormGroup({});
  charFormGroup: FormGroup = new FormGroup({});
  generalFormGroup: FormGroup = new FormGroup({});

  constructor(private data: AddPropertyDataService) {}

  publishAd(): void {}

  ngOnInit(): void {
    this.data.typeFormSource.subscribe(form => this.typeFormGroup = form);
    this.data.characteristicsFormSource.subscribe(form => this.charFormGroup = form);
    this.data.generalInfoFormSource.subscribe(form => this.generalFormGroup = form);
  }
}
