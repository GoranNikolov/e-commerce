import {Component, Input} from '@angular/core';
import {Product} from "../../services/graphql.service";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {
  @Input() items: Product[] | any;
}
