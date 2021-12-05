import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwockiListComponent } from './owocki-list.component';

describe('OwockiListComponent', () => {
  let component: OwockiListComponent;
  let fixture: ComponentFixture<OwockiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwockiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwockiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
