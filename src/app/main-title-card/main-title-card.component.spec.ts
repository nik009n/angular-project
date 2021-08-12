import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTitleCardComponent } from './main-title-card.component';

describe('MainTitleCardComponent', () => {
  let component: MainTitleCardComponent;
  let fixture: ComponentFixture<MainTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTitleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
