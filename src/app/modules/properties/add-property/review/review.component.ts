import { Component, inject, OnInit } from '@angular/core';
import { AddPropertyDataService } from '../services/add-property.data.service';
import { FormGroup } from '@angular/forms';
import { PropertiesDataService } from '../../services/properties-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  private propertyService = inject(PropertiesDataService);
  private router = inject(Router);

  typeFormGroup: FormGroup = new FormGroup({});
  charFormGroup: FormGroup = new FormGroup({});
  generalFormGroup: FormGroup = new FormGroup({});
  images: string[] = [];

  constructor(private data: AddPropertyDataService) {}

  ngOnInit(): void {
    this.data.typeFormSource.subscribe(form => this.typeFormGroup = form);
    this.data.characteristicsFormSource.subscribe(form => this.charFormGroup = form);
    this.data.generalInfoFormSource.subscribe(form => this.generalFormGroup = form);
    this.data.imagesSource.subscribe(res => this.images = res);
  }

  publishAd(): void {
    let obj = this.createPropertyObject();
    console.log("PropertyObject", obj);
    // this.propertyService.addProperty(obj).subscribe(
    // res => {
    //   this.router.navigateByUrl(`/properties/${this.typeFormGroup.value.comune}/property/${res}`);
    // },
    // err => {
    //   console.error(err.message);
    // })
  }

  // Create Property Object
  createPropertyObject(): Object {
    return new Object({
      propertyFor: this.typeFormGroup.value.rentOrSale == "rent" ? 0 : 1,
      price: this.charFormGroup.value.price,
      description: this.generalFormGroup.value.description,
      disabilitiesAccess: this.generalFormGroup.value.accessibillity,
      view: this.generalFormGroup.value.view,
      positioning: this.generalFormGroup.value.positioning,
      zone: this.generalFormGroup.value.zone,
      nearTo: this.generalFormGroup.value.nearTo,
      distanceFromSea: this.generalFormGroup.value.distanceFromSea,
      disatnceFromCity: this.generalFormGroup.value.distanceFromCity,
      distanceFromCenter: this.generalFormGroup.value.distanceFromCenter,
      distanceFromAirport: this.generalFormGroup.value.distanceFromAirport,
      propertyImages: [
        this.images
      ],
      propertyCharacteristics: {
        constractionYear: this.charFormGroup.value.constructionYear,
        renovatedYear: this.charFormGroup.value.renovationYear,
        renovationType: this.charFormGroup.value.renovationType,
        buildingFloors: this.charFormGroup.value.buildingFloors,
        apartmentFloor: this.charFormGroup.value.apartmentFloor,
        energyClass: this.charFormGroup.value.energyClass,
        heating: this.charFormGroup.value.heating,
        typeOfHeating: this.charFormGroup.value.typeOfHeating,
        numberOfRooms: this.charFormGroup.value.rooms,
        bathrooms: this.charFormGroup.value.bathrooms,
        kitchens: this.charFormGroup.value.kitchen,
        livingRooms: this.charFormGroup.value.livingRooms,
        parkingSpaces: this.charFormGroup.value.parkingSpace,
        parkingType: this.charFormGroup.value.parkingType
      },
      additionalFeatures: {
        fournished: this.charFormGroup.value.fournished,
        electricDevices: this.charFormGroup.value.electricDevices,
        maintenanceFees: this.charFormGroup.value.maintenanceFees,
        floorType: this.charFormGroup.value.floorType,
        warehouse: this.charFormGroup.value.warehouse,
        petsAllowed: this.charFormGroup.value.petsAllowed,
        cameras: this.charFormGroup.value.cameras,
        cableTv: this.charFormGroup.value.cableTv,
        floorHeating: this.charFormGroup.value.floorHeating,
        internalStairs: this.charFormGroup.value.internalStairs,
        playroom: this.charFormGroup.value.playroom,
        elevator: this.charFormGroup.value.elevator,
        solarWaterHeater: this.charFormGroup.value.solarWaterHeater,
        garden: this.charFormGroup.value.garden,
        incomplete: this.charFormGroup.value.incomplete,
        luxurious: this.charFormGroup.value.luxurious,
        jacuzzi: this.charFormGroup.value.jacuzzi,
        sateliteAntenna: this.charFormGroup.value.sateliteAntenna,
        framesWithElectricShutters: this.charFormGroup.value.framesWithElectricShutters,
        neoclassical: this.charFormGroup.value.neoclassical,
        veranda: this.charFormGroup.value.veranda,
        maintainable: this.charFormGroup.value.maintainable,
        awnings: this.charFormGroup.value.awnings,
        alarmSystem: this.charFormGroup.value.alarmSystem
      },
      propertyTypeId: this.typeFormGroup.value.propertyType,
      propertyCategoryId: this.typeFormGroup.value.propertyCategory,
      comuneId: this.typeFormGroup.value.comune,
      citta: this.typeFormGroup.value.citta,
      address: this.typeFormGroup.value.address,
      alias: this.generalFormGroup.value.alias
    });
  }
}
