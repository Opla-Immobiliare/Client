export interface PropertyTypesWithCategories {
    id: number;
    typeName: string;
    propertyCategories: PropertyCategories[]
}

export interface PropertyCategories {
    id: number;
    categoryName: string;
}