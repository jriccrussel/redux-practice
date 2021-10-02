// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
// items
import cartItems from "../cart-items"

// redux stuff

// store - stores data, think of state / holds the data 
// reducer - function that used to update store

// REDUCER
// two arguments - state, action
// state - old state/state before update
// action - what happened/ what update
// return updated or old state

// DISPATCH & ACTIONS
// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy) means we need to return
// if ang dispatch has a different action nothing happens

// SPREAD OPERATOR {...}
// EX: return { ...state, count: state.count + 1 }
// ang scenario if naa daghan ang ma add na properties sa initial state and dli ka ganahan imo functionalities sa return(from the reducer fucntion) and dli ka gusto ma tandog and still want to have access sa na nga add na properties. Mag add lng ta ug spread operator({...state}) before sa functionalities( sa reducer) like this: { ...state, count: state.count + 1 }

// ACTIONS AS A VARIABLE
// the best practice is to make your ACTIONs in to a Variable and put it in to another file and then import it

// CONNECT
// for a component ganahan mag access sa "store" you need to add this on your component:
// >import { connect } from "react-redux"
// >at the bottom in the "export default" add this line "export default connect(mapStateToProps, mapDispatchProps)(Navbar)"
// >"mapStateToProps" and "mapDispatchProps" - both of them are functions
// >then create function so naa kai access sa store:
// Take note it need to return, the store cannot be mutable

// creating store from redux
import { createStore } from "redux"

// Actions as Variable
import { DECREASE, INCREASE } from "./actions"

// reducer function
import reducer from "./reducer"

// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux"

// initial store / intial state
const initialStore = {
  // count: 78
  // count: 0,
  // name: "john"
  cart: cartItems,
  total: 105,
  amount: 5
}

// reducer
// function reducer(state, action) {
//     console.log({ state, action })

//     // if (action.type === "DECREASE") {
//     if (action.type === DECREASE) {
//         // state.count = state.count - 1;
//         // return { count: state.count - 1 }
//         return { ...state, count: state.count - 1, name: "anna" }
//     }
//     // if (action.type === "INCREASE") {
//     if (action.type === INCREASE) {
//         // return { count: state.count + 1 }
//         return { ...state, count: state.count + 1 }
//     }
//      if (action.type === "RESET") {
//         // return { count: 0 };
//         return { ...state, count: 0 }
//     }
//     if (action.type === "CHANGE_NAME") {
//         return { ...state, name: "bobo" };
//     }
//     return state;
// }

// creating a variable and invoke/call the "createStore"
// in the "createStore" we gonna pass the "reducer" function to update our store
const store = createStore(reducer, initialStore)
// store.dispatch({ type: "DECREASE" })
// store.dispatch({ type: "RANDOM" })
// store.dispatch({ type: "CHANGE_NAME" })
// store.dispatch({ type: "RESET" })
// store.dispatch({ type: "INCREASE" })
// store.dispatch({ type: "INCREASE" })

store.dispatch({ type: DECREASE })
store.dispatch({ type: INCREASE })
store.dispatch({ type: INCREASE })
store.dispatch({ type: INCREASE })
store.dispatch({ type: INCREASE })
console.log(store.getState())

function App() {
  // cart setup
  return (
    // create "store" prop and now all of your components now have access to the store(ang "store = createStore(reducer, initialStore)")
    <Provider store={store}>
        {/* creating "cart" prop so "Navbar" component can now have access sa "store"  */}
        {/* <Navbar cart={store.getState()}  />
        <CartContainer cart={cartItems} /> */}
        <Navbar />
        <CartContainer cart={cartItems} />
    </Provider>
  )
}

export default App