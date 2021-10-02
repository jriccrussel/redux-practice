import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT
} from "./actions"

import cartItems from "../cart-items"

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}


// function reducer(state, action) {
// only if the initial store naa sa sulod reducer.js
function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  // DECREASE
  if (action.type === DECREASE) {
    // let tempCart = [];
    // if (action.payload.amount === 1) {
    //   tempCart = state.cart.filter(
    //     cartItem => cartItem.id !== action.payload.id
    //   )
    // } else {
    //   tempCart = state.cart.map(cartItem => {
    //     if (cartItem.id === action.payload.id) {
    //       cartItem = { ...cartItem, amount: cartItem.amount - 1 }
    //     }
    //     return cartItem
    //   })
    // }
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 }
      }
      return cartItem;
    })

    return { ...state, cart: tempCart }
  }

  // INCREASE
  if (action.type === INCREASE) {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      // cart: state.cart.filter(cartItem => cartItem.id !== action)
    }
  }

  // TOTALS
  if (action.type === GET_TOTALS) {
    // take note we still have access sa inital store
    // "total" & "amount" are properties we want to get - sa inital state ni mga properties 
    let { total, amount } = state.cart.reduce(
      // reduce we create a parameter "cartTotal" & "cartItem" tagaan nato sila ug value sulod sa function
      (cartTotal, cartItem) => {
        // take note naa tai access sa store
        // sa store or data ni cya na properies
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      
      // inital state
      {
        total: 0,
        amount: 0
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  // TOGGLE
  // we make the decrease and increase to be more dynamic
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      })
    };
  }

  return state;
}

export default reducer