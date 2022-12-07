import { ProposalLineItem } from "./proposal-line-item";

export class ProposalDetail {
    ProposalName!: String;
    AccountName!: String;
    StartDate!: Date;
    EndDate! : Date;
    PrimaryContact! : String;
    ProposalLineItems! : ProposalLineItem[];
}
