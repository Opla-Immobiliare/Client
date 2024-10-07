import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Province } from "../../models/province.model";

@Injectable()
export class ProvinceEntityService extends EntityCollectionServiceBase<Province> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Province', serviceElementsFactory);
    }
}

