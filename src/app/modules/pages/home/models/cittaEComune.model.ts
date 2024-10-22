import { Comune } from "src/app/modules/properties/add-property/models/comune.model";

export interface CittaEComune {
    cittaId: number;
    citta: string;
    comuni: Comune[]; 
}