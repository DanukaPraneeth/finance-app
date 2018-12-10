import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyElectricityComponent } from './certify-electricity.component';

describe('ReportsElectricityComponent', () => {
  let component: CertifyElectricityComponent;
  let fixture: ComponentFixture<CertifyElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
