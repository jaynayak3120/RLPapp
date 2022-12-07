import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteProposalComponent } from './quote-proposal.component';

describe('QuoteProposalComponent', () => {
  let component: QuoteProposalComponent;
  let fixture: ComponentFixture<QuoteProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
