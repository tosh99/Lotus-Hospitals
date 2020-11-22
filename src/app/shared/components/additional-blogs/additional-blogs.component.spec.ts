import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalBlogsComponent } from './additional-blogs.component';

describe('AdditionalBlogsComponent', () => {
  let component: AdditionalBlogsComponent;
  let fixture: ComponentFixture<AdditionalBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
