import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilityComponent } from './fertility.component';

describe('FertilityComponent', () => {
  let component: FertilityComponent;
  let fixture: ComponentFixture<FertilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
