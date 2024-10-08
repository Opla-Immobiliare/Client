import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPropertyDataService } from '../services/add-property.data.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  generalInfoForm: FormGroup;
  url: any;
  imagesPaths: string[] = [];

  acceessFrom: boolean = false;
  viewType: boolean = false;
  positioning: boolean = false;
  zone: boolean = false;

  constructor(private data: AddPropertyDataService) {
    this.generalInfoForm = this.generateGeneralInfoForm();
  }

  generateGeneralInfoForm(): FormGroup {
    return new FormGroup({
      acceessFrom: new FormControl<string>('Strada', [Validators.required]),
      accessibillity: new FormControl<string>('noAccess', [Validators.required]),
      view: new FormControl<string>('noView'),
      viewType: new FormControl<string>('Mare'),
      positioning: new FormControl<string>('Angolo'),
      zone: new FormControl<string>('Residenziale'),
      availableFrom: new FormControl<string | undefined>(undefined),
      distanceFromSea: new FormControl<number | undefined>(undefined),
      distanceFromCenter: new FormControl<number | undefined>(undefined),
      distanceFromCity: new FormControl<number | undefined>(undefined),
      distanceFromAirport: new FormControl<number | undefined>(undefined),
      nearTo: new FormControl<string | undefined>(undefined),
      description: new FormControl<string | undefined>(undefined, [Validators.required]),
      alias: new FormControl<string | null>(null, [Validators.required,])
    });
  }

  labelControl(name: string): string {
    if (this.generalInfoForm.controls[name].valid && this.generalInfoForm.controls[name].touched) return 'bg-[#CCC2B2] px-1 py-0.5';
    if (this.generalInfoForm.controls[name].invalid && (this.generalInfoForm.controls[name].touched || this.generalInfoForm.controls[name].dirty)) return 'bg-[#FF5449] peer-focus:bg-[#FF5449] py-0.5 px-1';
    return 'bg-none';
  }

  updateGeneralInfoForm(): void {
    this.data.changeGeneralInfoForm(this.generalInfoForm)
    this.data.generalInfoFormSource.subscribe(res => this.generalInfoForm.patchValue(res.value));
  }

  selectedFiles(event: any): void {
    const files: File = event.target.files;
    console.log(files);
    this.data.uploadFiles(files).subscribe(res => {
      res.forEach(file => this.imagesPaths.push(file));
      this.data.setImages(this.imagesPaths);
    });
  }

  removeImage(item: string) {

  }

  ngOnInit(): void {}
}
