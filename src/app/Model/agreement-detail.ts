import { AgreementLineItem } from "./agreement-line-item";


export class AgreementDetail {

    constructor() {
    }

    AgreementName!: String;
    AccountName!: String;
    StartDate!: Date;
    EndDate! : Date;
    PrimaryContact! : String;
    AgreementLineItems!: AgreementLineItem[];
}
