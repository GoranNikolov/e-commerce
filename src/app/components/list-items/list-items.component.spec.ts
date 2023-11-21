import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsComponent } from './list-items.component';
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";

describe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should handle empty items array', () => {
    component.items = [];
    fixture.detectChanges();

    const itemElements = fixture.debugElement.queryAll(By.css('.item'));
    expect(itemElements.length).toBe(0);
  });

});
