import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchCriteria } from '../models/searchCriteria.model';

@Injectable({
  providedIn: 'root'
})
export class SearchCriteriaService {

  
  constructor() { }

  public searchCriteriaSubject: BehaviorSubject<SearchCriteria | undefined> = new BehaviorSubject<SearchCriteria | undefined>(undefined);

  updateSearchCriterria(searchCriteria: SearchCriteria): void {
    this.searchCriteriaSubject.next(searchCriteria);
  }
}
