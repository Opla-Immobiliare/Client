import { PropertyCharacteristics } from "./property-characteristics.model";

export interface Property {
    propertyFor: number;
    squareMetters: number;
    price: number;
    description: string;
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
    userEmail: string;
    propertyImages: string[];
    dateCreated: string;
    lastUpdate: string;
    propertyCharacteristics: PropertyCharacteristics;
    id: number;
}
