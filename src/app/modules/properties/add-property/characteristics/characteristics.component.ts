import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  characteristisForm: FormGroup;

  constructor() {
    this.characteristisForm = this.generateCharacteristicsForm();
  }

  generateCharacteristicsForm(): FormGroup {
    return new FormGroup({
      squareMetters: new FormControl<number | undefined>(undefined, [Validators.required]),
      price: new FormControl<number | undefined>(undefined, [Validators.required]),
      constructionYear: new FormControl<number | undefined>(undefined, [Validators.required]),
      renovated: new FormControl<string>('no', [Validators.required]),
      renovationYear: new FormControl<number | undefined>(undefined, [Validators.required]),
      renovationType: new FormControl<string>('completamente', [Validators.required]),
      buildingFloors: new FormControl<number>(0, [Validators.required]),
      apartmentFloor: new FormControl('scegli il piano dell appartamento', [Validators.required]),
      energyClass: new FormControl<string>("Nessuno", [Validators.required]),
      rooms: new FormControl<number>(0, [Validators.required]),
      bathrooms: new FormControl<number>(0, [Validators.required]),
      kitchens: new FormControl<number>(0, [Validators.required]),
      livingRooms: new FormControl<number>(0, [Validators.required]),
      parking: new FormControl<string>('no', [Validators.required]),
      parkingSpace: new FormControl<number>(1, [Validators.required]),
      parkingType: new FormControl('Interno', [Validators.required]),
      furnished: new FormControl<boolean>(false),
      electricalDevices: new FormControl<boolean>(false),
      maintenanceFees: new FormControl<boolean>(false),
    });
  }

  labelControl(name: string): string {
    if (this.characteristisForm.controls[name].valid && this.characteristisForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.characteristisForm.controls[name].invalid && (this.characteristisForm.controls[name].touched || this.characteristisForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  ngOnInit(): void {}
}
