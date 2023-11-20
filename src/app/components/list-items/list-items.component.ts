import {Component, Input} from '@angular/core';
import {Product} from "../../services/graphql.service";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input() items: Product[] | any;
}
