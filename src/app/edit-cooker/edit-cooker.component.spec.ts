import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCookerComponent } from './edit-cooker.component';

describe('EditCookerComponent', () => {
  let component: EditCookerComponent;
  let fixture: ComponentFixture<EditCookerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCookerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
