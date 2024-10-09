import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPropertyDataService {

  // Type
  private typeForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
  typeFormSource = this.typeForm.asObservable();

  // Characteristics
  private characteristicsForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
  characteristicsFormSource = this.characteristicsForm.asObservable();

  // General Information
  private generalInfoForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
  generalInfoFormSource = this.generalInfoForm.asObservable();

  // Images
  private images = new BehaviorSubject<string[]>([]);
  imagesSource = this.images.asObservable();

  constructor(private http: HttpClient) { }

  // Type form
  changeTypeForm(form: FormGroup): void {
    this.typeForm.next(form);
    // console.log('Service Form', form.value)
  }

  // Characteristics form
  changeCharacteristicsForm(form: FormGroup): void {
    this.characteristicsForm.next(form);
    // console.log('Service Form', form.value)
  }

  // GeneralInfo form
  changeGeneralInfoForm(form: FormGroup): void {
    this.generalInfoForm.next(form);
    // console.log('Service Form', form.value)
  }

  // SetImages
  setImages(images: string[]): void {
    this.images.next(images);
  }

  // UploadFiles
  uploadFiles(files: any) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }
    console.log(formData)
    return this.http.post<string[]>("http://localhost:5270/api/v1/Images", formData);
  }

  // Remove File
  removeFile(item: string) {
    return this.http.delete(`${environment.apiUrl}/Images?item=${item}`);
  }
}
