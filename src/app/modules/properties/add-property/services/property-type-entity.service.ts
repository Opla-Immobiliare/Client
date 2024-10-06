import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Injectable } from "@angular/core";
import { PropertyType } from "../models/propert-type.model";

@Injectable()
export class PropertyTypeEntityService extends EntityCollectionServiceBase<PropertyType> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('PropertyType', serviceElementsFactory);
    }
}

