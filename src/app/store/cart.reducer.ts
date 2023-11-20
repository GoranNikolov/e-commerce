// cart.reducer.ts
import {createReducer, on} from '@ngrx/store';
import {addToCart, removeCartItem, updateCartItemQty} from './cart.actions';
import {CartItem} from '../interface/cart-item.interface'; // Update with the actual path

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {cartItem}) => {
    const existingItemIndex = state.items.findIndex(item => item.id === cartItem.id);

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
  on(updateCartItemQty, (state, {cartItemId, qty}) => {
    const updatedItems = state.items.map(item =>
      item.id === cartItemId ? {...item, qty} : item
    );
    return {...state, items: updatedItems};
  }),
  on(removeCartItem, (state, {cartItemId}) => ({
    ...state,
    items: state.items.filter(item => item.id !== cartItemId),
  }))
);
