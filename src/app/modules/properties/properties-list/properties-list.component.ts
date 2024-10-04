import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertyEntityService } from '../services/property-entity.service';
import { Property } from '../models/property.model';
import { Observable, pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  pageForm: FormGroup;
  properties$: Observable<Property[] | undefined> = new Observable<Property[]>;

  constructor(private propertyEntityService: PropertyEntityService, private route: ActivatedRoute) {
    this.pageForm = this.generatePageForm();
  }

  generatePageForm(): FormGroup {
    return new FormGroup({

    })
  }

  changePage(): void {
    
  }

  ngOnInit(): void {

    // Get Municiplaity slug
    const MUNICIPALITY = this.route.snapshot.paramMap.get('municipality');
    console.log("MUNICIPALITY", MUNICIPALITY);

    this.loadProperties();
    console.log("Properties", this.properties$);
  }

  loadProperties() {
    this.properties$ =  this.propertyEntityService.getAll();
  }
}
