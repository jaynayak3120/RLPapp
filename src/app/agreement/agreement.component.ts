import { Component, Input, OnInit } from '@angular/core';
import { AgreementDetail } from '../Model/agreement-detail';
import { AgreementLineItem } from '../Model/agreement-line-item';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
  @Input() numbers: number[];

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

  agreementDetail: AgreementDetail = {
    AgreementName: "MSA for ABC Corporation",
    AccountName: "ABC Corporation",
    StartDate:  new Date("2022-01-16"),
    EndDate: new Date("2023-01-16"),
    PrimaryContact: "Diego Francis",
    AgreementLineItems: [
      {
        ProductName: "Macbooc Pro 14inch",
        ProductType: "Laptop",
        ListPrice: 999,
        Quantity: 12,
        NetPrice: 11988
      },
      {
        ProductName: "iPhone 13",
        ProductType: "Smartphone",
        ListPrice: 799,
        Quantity: 1,
        NetPrice: 799
      }
    ]
  };

  agreementLines : AgreementLineItem[] = this.agreementDetail.AgreementLineItems;
  
  display: string= "none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onSave(productName: HTMLInputElement,productType: HTMLInputElement,listPrice: HTMLInputElement,quantity: HTMLInputElement,netPrice: HTMLInputElement) {
    this.agreementDetail.AgreementLineItems.push({
        ProductName: productName.value,
        ProductType: productType.value,
        ListPrice: Number(listPrice.value),
        Quantity: Number(quantity.value),
        NetPrice: Number(listPrice.value)*Number(quantity.value)
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
    this.agreementDetail.AgreementLineItems.splice(index, 1);
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