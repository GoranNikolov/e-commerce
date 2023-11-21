import { TestBed } from '@angular/core/testing';
import { FacetService } from './facet.service';

describe('FacetService', () => {
  let facetService: FacetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacetService],
    });
    facetService = TestBed.inject(FacetService);
  });

  it('should be created', () => {
    expect(facetService).toBeTruthy();
  });

  describe('transformFacets', () => {
    it('should transform facets correctly', () => {
      const productResponse = [
        {
          facetValues: [
            { facet: { name: 'color' }, name: 'red', id: 1 },
            { facet: { name: 'size' }, name: 'small', id: 2 },
          ],
        },
        {
          facetValues: [
            { facet: { name: 'color' }, name: 'blue', id: 3 },
            { facet: { name: 'size' }, name: 'medium', id: 4 },
          ],
        },
      ];

      const result = facetService.transformFacets(productResponse);

      expect(result.length).toBe(2);
      expect(result[0].name).toBe('color');
      expect(result[0].values.length).toBe(2);
      // Add more expectations based on your data
    });
  });

  describe('transformFacetResults', () => {
    it('should transform facet results correctly', () => {
      const facetResults = [
        { count: 10, facetValue: { name: 'red', facet: { name: 'color' }, id: 1 } },
        { count: 5, facetValue: { name: 'blue', facet: { name: 'color' }, id: 3 } },
      ];

      const result = facetService.transformFacetResults(facetResults);

      expect(result.length).toBe(1);
      expect(result[0].name).toBe('color');
      expect(result[0].values.length).toBe(2);
      // Add more expectations based on your data
    });
  });
});
