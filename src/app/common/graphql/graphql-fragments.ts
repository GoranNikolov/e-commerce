import { gql } from '@apollo/client';

export const ASSET_FRAGMENT = gql`
  fragment Asset on Asset {
    id
    source
    type
    width
    height
    name
    preview
    focalPoint {
     x
     y
     }
  }
`;
export const CART_FRAGMENT = gql`
    fragment Cart on Order {
        id
        code
        state
        active
        updatedAt
        orderPlacedAt
        lines {
            id
            featuredAsset {
                ...Asset
            }
            unitPrice
            unitPriceWithTax
            quantity
            linePriceWithTax
            discountedLinePriceWithTax
            productVariant {
                id
                name
            }
            discounts {
                amount
                amountWithTax
                description
                adjustmentSource
                type
            }
        }
        totalQuantity
        subTotal
        subTotalWithTax
        total
        totalWithTax
    }
    ${ASSET_FRAGMENT}
`;
export const ERROR_RESULT_FRAGMENT = gql`
    fragment ErrorResult on ErrorResult {
        errorCode
        message
    }
`;
