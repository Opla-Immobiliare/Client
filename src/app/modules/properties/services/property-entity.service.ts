import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Property } from "../models/property.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PropertyEntityService extends EntityCollectionServiceBase<Property> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Property', serviceElementsFactory);
    }
}

