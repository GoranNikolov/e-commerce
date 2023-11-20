import {Component, Input} from '@angular/core';
import {SharedServiceService} from "../../services/shared-service.service";

interface FacetValueFilter {
  and: string;
}

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.css']
})
export class SideFiltersComponent {
  @Input() facetList: { name: string, values: { name: any; id: any; }[] }[] = [];

  selectedValues: { [key: string]: boolean } = {};
  facetValueFilters: { and: string }[] = [];

  constructor(private sharedService: SharedServiceService) {}

  onCheckboxChange(valueId: string) {
    if (this.selectedValues[valueId]) {
      // Checkbox is unchecked, so remove it from the selected values
      delete this.selectedValues[valueId];
    } else {
      // Checkbox is checked, so add it to the selected values
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
