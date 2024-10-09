export interface UserProperty {
    id: number;
    images: string[];
    alias: string;
    propertyFor: number;
    price: number;
    squareMetters: number;
    oldPrice: number;
    favs: number;
    bathrooms?: number;
    bedrooms?: number;
    citta: string;
}