import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefMealsComponent } from './chef-meals.component';

describe('ChefMealsComponent', () => {
  let component: ChefMealsComponent;
  let fixture: ComponentFixture<ChefMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
