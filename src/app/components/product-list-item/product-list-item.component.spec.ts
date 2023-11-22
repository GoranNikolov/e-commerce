import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListItemComponent} from './product-list-item.component';
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";

describe('ListItemsComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListItemComponent);
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
