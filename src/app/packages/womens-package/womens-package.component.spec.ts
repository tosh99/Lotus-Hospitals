import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensPackageComponent } from './womens-package.component';

describe('WomensPackageComponent', () => {
  let component: WomensPackageComponent;
  let fixture: ComponentFixture<WomensPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
