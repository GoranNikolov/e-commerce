import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private router: Router) {}

  navigateToSearchResults(searchTerm: string | null): void {
    this.router.navigate(['/search'], { queryParams: { search: searchTerm } });
  }
}
