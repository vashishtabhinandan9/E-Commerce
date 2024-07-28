import { atom, selector } from 'recoil';

// Atom to store the items in the cart
export const cartState = atom({
  key: 'cartState',
  default: []
});

// Selector to calculate the total number of items in the cart
export const cartCountState = selector({
  key: 'cartCountState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }
});

// Selector to calculate the total price of the items in the cart
export const cartTotalPriceState = selector({
  key: 'cartTotalPriceState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
});
