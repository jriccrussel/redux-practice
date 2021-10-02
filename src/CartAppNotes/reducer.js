import { DECREASE, INCREASE, CLEAR_CART } from "./actions"

function reducer(state, action) {
  console.log({ state, action })
  
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1, name: "anna" }
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 }
  }

  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] };
  // }

  // SWITCH METHOD
  switch(action.type){
    case CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }

  return state;
}

export default reducer