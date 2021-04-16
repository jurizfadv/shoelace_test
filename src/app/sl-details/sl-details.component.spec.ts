import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlDetailsComponent } from './sl-details.component';

describe('SlDetailsComponent', () => {
  let component: SlDetailsComponent;
  let fixture: ComponentFixture<SlDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
