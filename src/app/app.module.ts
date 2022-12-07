import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'ng-cdbangular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteProposalComponent } from './quote-proposal/quote-proposal.component';
import { AgreementComponent } from './agreement/agreement.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { ProposalLineItemComponent } from './proposal-line-item/proposal-line-item.component';
import { AgreementLineItemComponent } from './agreement-line-item/agreement-line-item.component';
import { HttpClientModule } from '@angular/common/http';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoute : Routes = [
  {path: '', component: QuoteProposalComponent},
  {path: 'agr', component: AgreementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteProposalComponent,
    AgreementComponent,
    VerticalNavComponent,
    ProposalLineItemComponent,
    AgreementLineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    SidebarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

