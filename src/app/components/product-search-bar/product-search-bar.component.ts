import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.css']
})
export class ProductSearchBarComponent {
  searchTerm = new FormControl('');

  constructor(private searchService: SearchService) {}

    doSearch() {
    const searchTerm = this.searchTerm.value;
      this.searchService.navigateToSearchResults(searchTerm)
      this.searchTerm.setValue('', {emitEvent: false});
  }
}
