import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SideFilterComponent} from './side-filter.component';

describe('SideFiltersComponent', () => {
  let component: SideFilterComponent;
  let fixture: ComponentFixture<SideFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideFilterComponent]
    });
    fixture = TestBed.createComponent(SideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
