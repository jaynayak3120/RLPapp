import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalLineItemComponent } from './proposal-line-item.component';

describe('ProposalLineItemComponent', () => {
  let component: ProposalLineItemComponent;
  let fixture: ComponentFixture<ProposalLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
