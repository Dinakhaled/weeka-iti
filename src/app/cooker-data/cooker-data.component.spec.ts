import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerDataComponent } from './cooker-data.component';

describe('CookerDataComponent', () => {
  let component: CookerDataComponent;
  let fixture: ComponentFixture<CookerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
