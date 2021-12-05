import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOwockiComponent } from './search-owocki.component';

describe('SearchOwockiComponent', () => {
  let component: SearchOwockiComponent;
  let fixture: ComponentFixture<SearchOwockiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOwockiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOwockiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
