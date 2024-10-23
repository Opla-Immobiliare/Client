export interface ActiveCategoryModel {
    cityId: number;
    provinceId: number;
    city: string;
    province: string;
    areas: ActiveAreaModel[];
}

export interface ActiveAreaModel {
    areaId: number;
    area: string;
}