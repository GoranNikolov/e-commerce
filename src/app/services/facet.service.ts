import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacetService {

  constructor() {
  }

  transformFacets(productResponse: any): { name: string, values: { name: string, id: number }[] }[] {
    const transformedFacets: { name: string, values: { name: string, id: number }[] }[] = [];

    productResponse?.forEach((product: any) => {
      product.facetValues?.forEach((facetValue: any) => {
        const existingFacet = transformedFacets.find(facet => facet.name === facetValue.facet.name);

        if (existingFacet) {
          const existingValue = existingFacet.values.find(value => value.name === facetValue.name);
          if (!existingValue) {
            existingFacet.values.push({
              name: facetValue.name,
              id: facetValue.id
            });
          }
        } else {
          if (!transformedFacets.some(facet => facet.name === facetValue.facet.name)) {
            transformedFacets.push({
              name: facetValue.facet.name,
              values: [{
                name: facetValue.name,
                id: facetValue.id
              }]
            });
          }
        }
      });
    });

    return transformedFacets;
  }
  transformFacetResults(facetResults: any[]) {
    const transformedFacets: { name: any; values: { name: any; count: any; id: any; }[]; }[] = [];

    facetResults.forEach((facetResult) => {
      const { count, facetValue } = facetResult;
      const { name, facet } = facetValue;

      const existingFacet = transformedFacets.find((transformedFacet) => transformedFacet.name === facet.name);

      if (existingFacet) {
        const existingValue = existingFacet.values.find((value) => value.name === name);

        if (!existingValue) {
          existingFacet.values.push({ name, count, id: facetValue.id });
        }
      } else {
        const newFacet = { name: facet.name, values: [{ name, count, id: facetValue.id }] };
        transformedFacets.push(newFacet);
      }
    });

    return transformedFacets;
  }
}
