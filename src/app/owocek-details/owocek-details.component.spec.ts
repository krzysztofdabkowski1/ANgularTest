import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwocekDetailsComponent } from './owocek-details.component';

describe('OwocekDetailsComponent', () => {
  let component: OwocekDetailsComponent;
  let fixture: ComponentFixture<OwocekDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwocekDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwocekDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
