import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Injectable } from "@angular/core";
import { Plan } from "../models/plan.model";

@Injectable()
export class PlanEntityService extends EntityCollectionServiceBase<Plan> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Plan', serviceElementsFactory);
    }
}

