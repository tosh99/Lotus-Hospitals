import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonatologyComponent } from './neonatology.component';

describe('NeonatologyComponent', () => {
  let component: NeonatologyComponent;
  let fixture: ComponentFixture<NeonatologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeonatologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
