import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTouchComponent } from './get-touch.component';

describe('GetTouchComponent', () => {
  let component: GetTouchComponent;
  let fixture: ComponentFixture<GetTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTouchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
