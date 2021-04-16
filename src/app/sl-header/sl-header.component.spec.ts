import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlHeaderComponent } from './sl-header.component';

describe('SlHeaderComponent', () => {
  let component: SlHeaderComponent;
  let fixture: ComponentFixture<SlHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
