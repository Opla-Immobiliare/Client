import { PropertyAdditionalFeatures } from "./property-additional-features.model";

export interface PropertyCharacteristics {
    constractionYear: number;
    renovatedYear: number;
    renovationType: string;
    buildingFloors: number;
    apartmentFloor: number;
    energyClass: string;
    heating: string;
    typeOfHeating: string;
    numberOfRooms: number;
    bathrooms: number;
    wCs: number;
    kitchens: number;
    livingRooms: number;
    parkingSpaces: number;
    parkingType: string;
    landSquareMetters: number;
    buildingPermit: boolean;
    buildingSquareMeters: number;
    structureFactor: number;
    shape: string;
    frontageLength: number;
    cityPlan: boolean;
    additionalFeatures: PropertyAdditionalFeatures;
    constructionMeters: number;
}