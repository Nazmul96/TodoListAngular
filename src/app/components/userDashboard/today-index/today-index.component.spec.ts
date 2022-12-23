import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayIndexComponent } from './today-index.component';

describe('TodayIndexComponent', () => {
  let component: TodayIndexComponent;
  let fixture: ComponentFixture<TodayIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
