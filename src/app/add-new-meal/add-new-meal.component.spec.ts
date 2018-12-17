import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMealComponent } from './add-new-meal.component';

describe('AddNewMealComponent', () => {
  let component: AddNewMealComponent;
  let fixture: ComponentFixture<AddNewMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
