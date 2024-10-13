import { PropertyCharacteristics } from "./property-characteristics.model";

export interface Property {
    propertyFor: number
    squareMetters: number
    price: number
    oldPrice: any
    description: string
    accessFrom: any
    disabilitiesAccess: boolean
    view: string
    positioning: string
    zone: string
    availableFrom: any
    nearTo: string
    distanceFromSea: number
    distanceFromCity: number
    distanceFromCenter: number
    distanceFromAirport: number
    userPhoneNumber: string
    propertyImages: string[]
    propertyCharacteristics: PropertyCharacteristics
    propertyTypeId: number
    propertyCategory: any
    propertyCategoryId: number
    dateCreated: string
    lastUpdate: string
    citta: any
    comune: any
    alias: string
    address: string
    id: number
}