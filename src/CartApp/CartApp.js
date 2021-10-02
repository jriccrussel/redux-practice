// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
// items
import cartItems from "../cart-items"

// redux stuff

// creating store from redux
import { createStore } from "redux"

// reducer function
import reducer from "./reducer"

// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux"

// inital store or state
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

const store = createStore(
  reducer,
  initialStore
)

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer/>
    </Provider>
  )
}

export default App