import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Injectable } from "@angular/core";
import { Profile } from "../models/profile.model";

@Injectable()
export class ProfileEntityService extends EntityCollectionServiceBase<Profile> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Profile', serviceElementsFactory);
    }
}

