import {createReducer, on} from '@ngrx/store';
import {addToCart, removeCartItem, updateCartItemQty} from './cart.actions';
import {CartItem} from '../interface/cart-item.interface';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {cartItem}) => {
    const existingItemIndex = state.items.findIndex(item =>
      item.id === cartItem.id && item.variant.name === cartItem.variant.name
    );

    if (existingItemIndex > -1) {
      // If the item already exists, update its quantity
      const updatedItems = [...state.items];

      // Check if the item at the existingItemIndex is defined before accessing its properties
      if (updatedItems[existingItemIndex]) {
        updatedItems[existingItemIndex] = {
          ...cartItem,
          qty: (updatedItems[existingItemIndex].qty || 0) + 1,
        };
      }

      return {...state, items: updatedItems};
    } else {
      // If the item doesn't exist, add it to the cart
      return {...state, items: [...state.items, cartItem]};
    }
  }),
  on(updateCartItemQty, (state, {cartItemId, qty, variantName}) => {
    const updatedItems = state.items.map(item =>
      item.id === cartItemId && item.variant.name === variantName
        ? {...item, qty}
        : item
    );
    return {...state, items: updatedItems};
  }),
  on(removeCartItem, (state, {cartItemId, variantName}) => ({
    ...state,
    items: state.items.filter(item =>
      item.id !== cartItemId || item.variant.name !== variantName
    ),
  }))
);
