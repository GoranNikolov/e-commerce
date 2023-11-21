import { createAction, props } from '@ngrx/store';
import {CartItem} from "../interface/cart-item.interface";

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ cartItem: CartItem }>());
export const updateCartItemQty = createAction(
  '[Cart] Update Cart Item Quantity',
  props<{ cartItemId: string; qty: number; variantName: string }>()
);

export const removeCartItem = createAction(
  '[Cart] Remove Cart Item',
  props<{ cartItemId: string; variantName: string }>()
);
