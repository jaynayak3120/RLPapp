import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementLineItemComponent } from './agreement-line-item.component';

describe('AgreementLineItemComponent', () => {
  let component: AgreementLineItemComponent;
  let fixture: ComponentFixture<AgreementLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
