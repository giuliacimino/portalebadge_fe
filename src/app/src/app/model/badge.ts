import {Scadenza} from "./enumerations/scadenza";
import {AmbitoLavorativo} from "./ambito-lavorativo";

export class Badge {

  constructor(
    public id?: number,
    public nome?:string,
    public cognome?:string,
    public codiceFiscale?:string,
    public dataNascita?:Date,
    public scadenza?:Scadenza,
    public ambitoLavorativo?:AmbitoLavorativo[]
  ) { }
}
