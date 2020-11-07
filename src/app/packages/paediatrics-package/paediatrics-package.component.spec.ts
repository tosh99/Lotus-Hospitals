import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaediatricsPackageComponent } from './paediatrics-package.component';

describe('PaediatricsPackageComponent', () => {
  let component: PaediatricsPackageComponent;
  let fixture: ComponentFixture<PaediatricsPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaediatricsPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaediatricsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
