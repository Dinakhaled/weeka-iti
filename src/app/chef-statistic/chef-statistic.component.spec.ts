import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheafStatisticComponent } from './cheaf-statistic.component';

describe('CheafStatisticComponent', () => {
  let component: CheafStatisticComponent;
  let fixture: ComponentFixture<CheafStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheafStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheafStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
