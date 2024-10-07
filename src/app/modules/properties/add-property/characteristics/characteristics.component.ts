import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPropertyDataService } from '../services/add-property.data.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  characteristisForm: FormGroup;

  buildingfloors: boolean = false;

  constructor(private data: AddPropertyDataService) {
    this.characteristisForm = this.generateCharacteristicsForm();
  }

  generateCharacteristicsForm(): FormGroup {
    return new FormGroup({
      squareMetters: new FormControl<number | undefined>(undefined, [Validators.required]),
      price: new FormControl<number | undefined>(undefined, [Validators.required]),
      constructionYear: new FormControl<number | undefined>(undefined),
      renovated: new FormControl<string>('no'),
      renovationYear: new FormControl<number | undefined>(undefined),
      renovationType: new FormControl<string>('fully'),
      buildingFloors: new FormControl<number>(0),
      apartmentFloor: new FormControl('scegli il piano dell appartamento'),
      energyClass: new FormControl<string>("None"),
      rooms: new FormControl<number>(0),
      bathrooms: new FormControl<number>(0),
      kitchens: new FormControl<number>(0),
      livingRooms: new FormControl<number>(0),
      parking: new FormControl<string>('noParking'),
      parkingSpace: new FormControl<number>(1),
      parkingType: new FormControl('Al coperto'),
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
      pool: new FormControl<string>('nessuno'),
      garden: new FormControl<boolean>(false),
      heating: new FormControl<string>('Autonomo'),
      heatingType: new FormControl<string>('Scegli il tipo di riscaldamento'),
      doorType: new FormControl<string>('Tipo di porta'),
      floorType: new FormControl<string>('Tipo di pavimento'),
      warehouse: new FormControl<string>('nessuno'),
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
    console.log("BeforePatch",this.characteristisForm.value);
    this.data.changeCharacteristicsForm(this.characteristisForm);
    this.data.characteristicsFormSource.subscribe(res => {this.characteristisForm.patchValue(res.value); console.log("AfterPatch", res.value)});
    // console.log(this.characteristisForm.value);
  }

  ngOnInit(): void {
    
  }
}
