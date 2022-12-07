import { Component, Input, OnInit } from '@angular/core';
import { ProposalDetail } from '../Model/proposal-detail';
import { ProposalLineItem } from '../Model/proposal-line-item';

@Component({
  selector: 'app-quote-proposal',
  templateUrl: './quote-proposal.component.html',
  styleUrls: ['./quote-proposal.component.css']
})
export class QuoteProposalComponent implements OnInit {
  @Input() numbers: number[];

  constructor() { this.numbers = Array(5).fill(0).map((x,i)=>i); }

  ngOnInit(): void {
  }
  
  proposalDetail: ProposalDetail= {
    ProposalName: "Proposal for 123 Warehoising",
    AccountName: "123 Warehoising",
    StartDate:  new Date("2022-01-07"),
    EndDate: new Date("2023-10-22"),
    PrimaryContact: "Elon Musk",
    ProposalLineItems: [
      {
        ProductName: "Dell XPS 15",
        ProductType: "Laptop",
        ListPrice: 1299,
        Quantity: 19,
        NetPrice: 12990
      },
      {
        ProductName: "Samsung Galaxy S22",
        ProductType: "Smartphone",
        ListPrice: 799,
        Quantity: 1,
        NetPrice: 799
      }
    ]
  };
  proposalLines : ProposalLineItem[] = this.proposalDetail.ProposalLineItems;

  display: string= "none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onSave(productName: HTMLInputElement,productType: HTMLInputElement,listPrice: HTMLInputElement,quantity: HTMLInputElement,netPrice: HTMLInputElement) {
    this.proposalDetail.ProposalLineItems.push({
        ProductName: productName.value,
        ProductType: productType.value,
        ListPrice: Number(listPrice.value),
        Quantity: Number(quantity.value),
        NetPrice: Number(netPrice.value)
    });
    this.clearData(productName,productType,listPrice,quantity,netPrice);
    this.onCloseHandled();
  }
  clearData(productName: HTMLInputElement,productType: HTMLInputElement,listPrice: HTMLInputElement,quantity: HTMLInputElement,netPrice: HTMLInputElement) {
    productName.value="";
    productType.value="";
    listPrice.value="";
    quantity.value= "";
    netPrice.value="";
  }
  onRemove(index: number) {
    this.proposalDetail.ProposalLineItems.splice(index, 1);
  }
  padTo2Digits(num : number) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date : Date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}
