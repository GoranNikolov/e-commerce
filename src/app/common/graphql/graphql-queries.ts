import { gql } from '@apollo/client';
import {ASSET_FRAGMENT} from "./graphql-fragments";

export const GET_PRODUCTS = gql`
  query GetProducts($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        slug
        name
        description
        variants {
          id
          name
          price
        }
        assets {
          ...Asset
        }
        facetValues {
        id,
        name,
        facetId,
        facet {
            name,
        }
        }
      }
      totalItems
    }
  }
  ${ASSET_FRAGMENT}
`;
export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetail($slug: String!) {
    product(slug: $slug) {
        id
        slug
        name
        description
        variants {
          id
          name
          price
        }
        assets {
          ...Asset
        }
      }
  }
  ${ASSET_FRAGMENT}
`;
export const GET_COLLECTION = gql`
query GetCollection($id: ID, $slug: String) {
  collection(id: $id, slug: $slug) {
    id
    name
    slug
    description
 }
}
`
export const SEARCH_PRODUCTS = gql`
query SearchProducts($input: SearchInput!) {
  search(input: $input) {
    items {
      productId
      slug
      productName
      description
      priceWithTax {
        ... on PriceRange {
          min
          max
        }
      }
      productAsset {
        id
        preview
        focalPoint {
          x
          y
        }
      }
    }
    totalItems
    facetValues {
      count
      facetValue {
        id
        name
        facet {
          id
          name
        }
      }
    }
  }
}
`
export const GET_CART_TOTALS = gql`
    query GetCartTotals {
        activeOrder {
            id
            active
            totalQuantity
            totalWithTax
        }
    }
`;
