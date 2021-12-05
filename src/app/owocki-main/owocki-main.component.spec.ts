import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwockiMainComponent } from './owocki-main.component';

describe('OwockiMainComponent', () => {
  let component: OwockiMainComponent;
  let fixture: ComponentFixture<OwockiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwockiMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwockiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
