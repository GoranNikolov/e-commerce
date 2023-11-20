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
}
