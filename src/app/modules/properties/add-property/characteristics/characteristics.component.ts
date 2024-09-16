import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPropertyDataService } from '../sevices/add-property.data.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  characteristisForm: FormGroup;

  constructor(private data: AddPropertyDataService) {
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
      petsAllowed: new FormControl<boolean>(false),
      cameras: new FormControl<boolean>(false),
      cableTv: new FormControl<boolean>(false),
      floorHeating: new FormControl<boolean>(false),
      internalStairs: new FormControl<boolean>(false),
      playroom: new FormControl<boolean>(false),
      elevator: new FormControl<boolean>(false),
      solarWaterHeater: new FormControl<boolean>(false),
      incomplete: new FormControl<boolean>(false),
      luxurious: new FormControl<boolean>(false),
      jacuzzi: new FormControl<boolean>(false),
      electricShutters: new FormControl<boolean>(false),
      satelliteAntenna: new FormControl<boolean>(false),
      neoclassical: new FormControl<boolean>(false),
      veranda: new FormControl<boolean>(false),
      maintainable: new FormControl<boolean>(false),
      awnings: new FormControl<boolean>(false),
      alarmSystem: new FormControl<boolean>(false),
      pool: new FormControl<string>('none'),
      garden: new FormControl<boolean>(false),
      heating: new FormControl<string>('Autonomous', [Validators.required]),
      heatingType: new FormControl<string>('Choose heating type', [Validators.required]),
      doorType: new FormControl<string>('Door type', [Validators.required]),
      floorType: new FormControl<string>('Floor type', [Validators.required]),
      warehouse: new FormControl<string>('none', [Validators.required]),
    });
  }

  labelControl(name: string): string {
    if (this.characteristisForm.controls[name].valid && this.characteristisForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.characteristisForm.controls[name].invalid && (this.characteristisForm.controls[name].touched || this.characteristisForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  // Update Characteristics Form
  updateCharacteristicsForm(): void {
    this.data.changeCharacteristicsForm(this.characteristisForm);
  }

  ngOnInit(): void {
    
  }
}
