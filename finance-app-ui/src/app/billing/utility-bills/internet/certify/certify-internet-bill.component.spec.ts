import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyElectricityBillComponent } from './certify-electricity-bill.component';

describe('CertifyElectricityBillComponent', () => {
  let component: CertifyElectricityBillComponent;
  let fixture: ComponentFixture<CertifyElectricityBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyElectricityBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyElectricityBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
