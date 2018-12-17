import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCommentComponent } from './meal-comment.component';

describe('MealCommentComponent', () => {
  let component: MealCommentComponent;
  let fixture: ComponentFixture<MealCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
