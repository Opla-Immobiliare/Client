import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { PropertyTypesWithCategories } from "../models/propertyTypesWithCategories.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PropertyCategoriesEntityService extends EntityCollectionServiceBase<PropertyTypesWithCategories> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('PropertyTypesWithCategories', serviceElementsFactory);
    }

}