import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PropertyService {
    private enableInterestForm = new BehaviorSubject<boolean>(false);
    enableInterestFormSource = this.enableInterestForm.asObservable();

    changeInterestFormSource(val: boolean): void {
        this.enableInterestForm.next(val);
    }
}