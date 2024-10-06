import * as cuid from "cuid";

export interface Basket {
    id: string;
    plan: BasketPlan;
    stripeToken?: string;
}


export class Basket implements Basket {
    id = cuid();
    plan: BasketPlan = {
        planName: "",
        pricePerMonth: 0,
        id: 0
    };
}

export interface BasketPlan {
    planName: string
    pricePerMonth: number
    id: number
}