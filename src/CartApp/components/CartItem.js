import { connect } from "react-redux"
import { INCREASE, DECREASE, REMOVE, TOGGLE_AMOUNT, removeItem } from "../actions"
const CartItem = ({
    img,
    title,
    price,
    amount,
    remove,
    increase,
    decrease,
    toggle
}) => {
    return (
      <div className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            {/* remove button */}
            <button className="remove-btn" onClick={() => remove()}>
                remove
            </button>
        </div>
        <div>
            {/* increase amount */}
            {/* <button className="amount-btn" onClick={() => increase()}> */}
            <button className="amount-btn" onClick={() => toggle("inc")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                </svg>
            </button>
            {/* amount */}
            <p className="amount">{amount}</p>
            {/* decrease amount */}
            {/* <button className="amount-btn" onClick={() => decrease()}> */}
            <button
                className="amount-btn"
                onClick={() => {
                    if (amount === 1) {
                        return remove()
                    } else {
                        // return decrease()
                        return toggle("dec")
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>
        </div>
      </div>
    )
}

// ang "mapDispatchToProps" has access sa store or data, so if we need to access sa property sa store we need first add a parameter "ownProps" para maka access ta properties and passing it in pud sa "CartItem"
const mapDispatchToProps = (dispatch, ownProps) => {
    const { id, amount } = ownProps
    return {
        remove: () => dispatch({ type: REMOVE, payload: { id } }),
        increase: () => dispatch({ type: INCREASE, payload: { id } }),
        remove: () => dispatch(removeItem(id)),
        decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
        toggle: toggle => dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } })
    }
}

// gamit lng ta ani na method like kini naa sa ubos since ang "mapStateProps" is already been declared sa lain na compoent and we already have access sa mga properties this one "<CartItem key={item.id} {...item} />" theres no need pa mag add pata ug "mapStateProps" sa first argument sa export "connect" instead we just pass in nato as "null" kini na example "connect(null, mapDispatchToProps)"
export default connect(null, mapDispatchToProps)(CartItem)