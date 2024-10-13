import { PropertyAdditionalFeatures } from "./property-additional-features.model";

export interface PropertyCharacteristics {
    constractionYear: any
    renovatedYear: any
    renovationType: any
    buildingFloors: number
    apartmentFloor: any
    energyClass: string
    heating: string
    typeOfHeating: any
    numberOfRooms: number
    bathrooms: number
    wCs: number
    kitchens: number
    livingRooms: number
    parkingSpaces: number
    parkingType: any
    landSquareMetters: number
    buildingPermit: boolean
    buildingSquareMetters: number
    structureFactor: any
    shape: any
    frontageLength: number
    cityPlan: boolean
    propertyId: number
    propertyAdditinalFeatureId: number
    propertyAdditionalFeatures: PropertyAdditionalFeatures
    id: number
}