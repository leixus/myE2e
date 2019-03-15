import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCourseComponent } from './recommended-course.component';

describe('RecommendedCourseComponent', () => {
  let component: RecommendedCourseComponent;
  let fixture: ComponentFixture<RecommendedCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
