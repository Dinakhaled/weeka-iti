import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAcookerComponent } from './become-acooker.component';

describe('BecomeAcookerComponent', () => {
  let component: BecomeAcookerComponent;
  let fixture: ComponentFixture<BecomeAcookerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeAcookerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAcookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
