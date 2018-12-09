import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyCountComponent } from './certify-count.component';

describe('CertifyCountComponent', () => {
  let component: CertifyCountComponent;
  let fixture: ComponentFixture<CertifyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
