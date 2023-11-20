import {CartItem} from "../interface/cart-item.interface";

export interface AppState {
  cart: {
    items: CartItem[];
  };
}
