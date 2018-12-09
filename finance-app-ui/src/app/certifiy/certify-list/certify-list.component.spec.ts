import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifyListComponent } from './certify-list.component';

describe('CertifyListComponent', () => {
  let component: CertifyListComponent;
  let fixture: ComponentFixture<CertifyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
