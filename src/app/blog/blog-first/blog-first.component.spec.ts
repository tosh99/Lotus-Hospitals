import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFirstComponent } from './blog-first.component';

describe('BlogFirstComponent', () => {
  let component: BlogFirstComponent;
  let fixture: ComponentFixture<BlogFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
