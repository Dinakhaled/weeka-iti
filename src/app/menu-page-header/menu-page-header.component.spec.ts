import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageHeaderComponent } from './menu-page-header.component';

describe('MenuPageHeaderComponent', () => {
  let component: MenuPageHeaderComponent;
  let fixture: ComponentFixture<MenuPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
