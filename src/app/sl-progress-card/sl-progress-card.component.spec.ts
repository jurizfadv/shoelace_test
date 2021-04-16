import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlProgressCardComponent } from './sl-progress-card.component';

describe('SlProgressCardComponent', () => {
  let component: SlProgressCardComponent;
  let fixture: ComponentFixture<SlProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlProgressCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
