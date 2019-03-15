import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourseComponent } from './full-course.component';

describe('FullCourseComponent', () => {
  let component: FullCourseComponent;
  let fixture: ComponentFixture<FullCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
