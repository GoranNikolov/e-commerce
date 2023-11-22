import {Component, Input} from '@angular/core';
import {SharedServiceService} from "../../services/shared-service.service";

interface FacetValueFilter {
  and: string;
}
@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent {
  @Input() facetList: { name: string, values: { name: any; id: any; }[] }[] = [];

  selectedValues: { [key: string]: boolean } = {};
  facetValueFilters: { and: string }[] = [];

  constructor(private sharedService: SharedServiceService) {}

  onCheckboxChange(valueId: string) {
    if (this.selectedValues[valueId]) {
      delete this.selectedValues[valueId];
    } else {
      this.selectedValues[valueId] = true;
    }

    // Update facetValueFilters based on selectedValues
    this.facetValueFilters = Object.keys(this.selectedValues).map(and => ({and}));

    this.search();
  }

  search() {
    this.updateSelectedValues();
    this.performSearch();
  }

  private updateSelectedValues() {
    this.selectedValues = this.facetValueFilters.reduce((acc: Record<string, boolean>, filter) => {
      const key = (filter as FacetValueFilter).and;
      acc[key] = true;
      return acc;
    }, {});
  }
  private performSearch() {
    this.sharedService.performSearch(this.facetValueFilters);
  }
}
