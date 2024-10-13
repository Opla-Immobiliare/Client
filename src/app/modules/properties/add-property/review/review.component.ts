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
    this.propertyService.addProperty(obj).subscribe(
    res => {
      this.router.navigateByUrl(`/properties/${this.typeFormGroup.value.comune}/property/${res}`);
    },
    err => {
      console.error(err.message);
    })
  }

  propertyType(id: number): string {
    switch(id) {
      case 1: 
        return 'House';
        break;
      case 2:
        return 'Land';
        break;
      case 3: 
        return 'Shops / Commercial premises';
        break;
      case 4: 
        return 'Offices / Co-working';
        break;
      case 5: 
        return 'Garage / Parking Spaces';
        break;
      default:
        return '';
        break;
    }
  }

  renovated(): string {
    if (this.charFormGroup.value.renovated == 'yes') {
      let str: string = 'Si | ';
      str += (this.charFormGroup.value.renovationType == 'fully') ? 'Completamente | ' : 'Parzialmente | ';
      str += this.charFormGroup.value.renovationYear.toString();
      return str;
    }
    return 'No';
  }

  heating(): string {
    if (this.charFormGroup.value.heating == 'Senza') {
      return 'Senza';
    } else {
      return `${this.charFormGroup.value.heating} | ${this.charFormGroup.value.heatingType}`;
    }
  }

  parking(): string {
    if (this.charFormGroup.value.parking == 'noParking') {
      return 'No';
    } else {
      return `Si | ${this.charFormGroup.value.parkingType} con ${this.charFormGroup.value.parkingSpace} posizione`
    }
  }

  view(): string {
    if (this.generalFormGroup.value.view == 'noView') {
      return 'No';
    } else {
      return `Si | ${this.generalFormGroup.value.viewType}`;
    }
  }

  // Create Property Object
  createPropertyObject(): Object {
    return new Object({
      propertyFor: this.typeFormGroup.value.rentOrSale == "rent" ? 0 : 1,
      price: this.charFormGroup.value.price,
      squareMetters: this.charFormGroup.value.squareMetters,
      description: this.generalFormGroup.value.description,
      disabilitiesAccess: (this.generalFormGroup.value.accessibillity == "yesAccess") ? true : false,
      view: (this.generalFormGroup.value.view == 'yesView') ? this.generalFormGroup.value.viewType : null,
      positioning: (this.generalFormGroup.value.positioning != "Select positioning") ? this.generalFormGroup.value.positioning : null,
      zone: (this.generalFormGroup.value.zone != "Select zone") ? this.generalFormGroup.value.zone : null,
      nearTo: this.generalFormGroup.value.nearTo,
      accessFrom: this.generalFormGroup.value.accessFrom != "Select Access" ? this.generalFormGroup.value.accessFrom : null,
      distanceFromSea: this.generalFormGroup.value.distanceFromSea,
      distanceFromCity: this.generalFormGroup.value.distanceFromCity,
      distanceFromCenter: this.generalFormGroup.value.distanceFromCenter,
      distanceFromAirport: this.generalFormGroup.value.distanceFromAirport,
      propertyImages: this.images,
      propertyCharacteristics: {
        constractionYear: this.charFormGroup.value.constructionYear,
        renovatedYear: (this.charFormGroup.value.renovated == 'yes') ? this.charFormGroup.value.renovationYear : null,
        renovationType: (this.charFormGroup.value.renovated == 'yes') ? this.charFormGroup.value.renovationType : null,
        buildingFloors: this.charFormGroup.value.buildingFloors,
        apartmentFloor: (this.charFormGroup.value.apartmentFloor == 'scegli il piano dell appartamento') ? null : this.charFormGroup.value.apartmentFloor,
        energyClass: this.charFormGroup.value.energyClass,
        heating: this.charFormGroup.value.heating,
        typeOfHeating: (this.charFormGroup.value.heating != "Senza") ? this.charFormGroup.value.typeOfHeating : null,
        numberOfRooms: this.charFormGroup.value.rooms,
        bathrooms: this.charFormGroup.value.bathrooms,
        kitchens: this.charFormGroup.value.kitchens,
        livingRooms: this.charFormGroup.value.livingRooms,
        parkingSpaces: (this.charFormGroup.value.parking != "noParking") ? this.charFormGroup.value.parkingSpace : 0,
        parkingType: (this.charFormGroup.value.parking != "noParking") ? this.charFormGroup.value.parkingType : null,
        buildingPermit: (this.charFormGroup.value.buildingPermit == "yesPermit") ? true : false,
        constructionMeters: this.charFormGroup.value.constructionMeters,
        buildingSquareArea: (this.charFormGroup.value.hasBuilding == 'noBuilding') ? null : this.charFormGroup.value.buildingSquareArea,
        structureFactor: this.charFormGroup.value.structureFactor,
        slope: (this.charFormGroup.value.slope == 'Select slope') ? null : this.charFormGroup.value.slope,
        frontageLength: this.charFormGroup.value.frontageLength,
        cityPlan: (this.charFormGroup.value.cityPlan == 'noCityPlan') ? false : true,
        additionalFeatures: {
          fournished: this.charFormGroup.value.furnished,
          electricDevices: this.charFormGroup.value.electricalDevices,
          maintenanceFees: this.charFormGroup.value.maintenanceFees,
          floorType: (this.charFormGroup.value.floorType == "Tipo di pavimento") ? null : this.charFormGroup.value.floorType,
          warehouse: (this.charFormGroup.value.warehouse == "nessuno") ? null : this.charFormGroup.value.warehouse,
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
          sateliteAntenna: this.charFormGroup.value.satelliteAntenna,
          framesWithElectricShutters: this.charFormGroup.value.electricShutters,
          neoclassical: this.charFormGroup.value.neoclassical,
          veranda: this.charFormGroup.value.veranda,
          maintainable: this.charFormGroup.value.maintainable,
          awnings: this.charFormGroup.value.awnings,
          alarmSystem: this.charFormGroup.value.alarmSystem
        },
      },
      propertyTypeId: this.typeFormGroup.value.propertyType,
      propertyCategoryId: this.typeFormGroup.value.propertyCategory,
      comune: this.typeFormGroup.value.comune,
      citta: this.typeFormGroup.value.citta,
      address: this.typeFormGroup.value.address,
      alias: this.generalFormGroup.value.alias
    });
  }
}
