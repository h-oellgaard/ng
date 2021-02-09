import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USerDetailsComponent } from './user-details.component';

describe('USerDetailsComponent', () => {
  let component: USerDetailsComponent;
  let fixture: ComponentFixture<USerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
