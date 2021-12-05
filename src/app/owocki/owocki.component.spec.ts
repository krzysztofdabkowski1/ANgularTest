import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwockiComponent } from './owocki.component';

describe('OwockiComponent', () => {
  let component: OwockiComponent;
  let fixture: ComponentFixture<OwockiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwockiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwockiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
