import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyElectricityTableComponent } from './certify-electricity-table.component';

describe('CertifyElectricityTableComponent', () => {
  let component: CertifyElectricityTableComponent;
  let fixture: ComponentFixture<CertifyElectricityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyElectricityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyElectricityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
