import { PropertyCharacteristics } from "./property-characteristics.model";

export interface Property {
    propertyFor: number;
    squareMetters: number;
    price: number;
    oldPrice: number;
    description: string;
    accessFrom: string;
    disabilitiesAccess: boolean;
    view: string;
    positioning: string;
    zone: string;
    availableFrom: string;
    nearTo: string;
    distanceFromSea: number;
    distanceFromCity: number;
    distanceFromCenter: number;
    distanceFromAirport: number;
    userPhoneNumber: string;
    propertyImages: string[];
    propertyCharacteristics: PropertyCharacteristics;
    propertyTypeId: number;
    propertyCategoryId: number;
    dateCreated: string;
    lastUpdate: string;
    comuneId: number;
    alias: string;
    address: string;
    id: number;
}