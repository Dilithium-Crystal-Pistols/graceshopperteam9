import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { fetchCart, updateCart, deleteCart } from "../store/cart";
import { Link } from "react-router-dom";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
    };
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {

    return (
      // <div>HELLO WORLD</div>
      <div>
        <div className="cart" id="cart">
          {this.props.cartItems.map((cartItem) => {
            return (
              <div key={cartItem.id}>
                <img src={cartItem.imageUrl}></img>
                <h2>{cartItem.name}</h2>
                <h2>Price: {cartItem.price}</h2>
                <h2>Quantity: {cartItem.cartItem.quantity}</h2>
                <form
                  id="update-quantity"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    this.props.updateCart(cartItem.id, cartItem.cartItem);
                  }}
                >
                  <label htmlFor="quantity"></label>
                  <select
                    onChange={(evt) => {
                      cartItem.cartItem.quantity = evt.target.value;
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button type="submit">Update Quantity</button>
                </form>
                <form onSubmit={(ev) => ev.preventDefault()}>
                <button
                  onClick={() => {
                    this.props.deleteCart(cartItem.id);
                    window.location.reload(false)
                  }}
                >
                  Delete Product From Cart
                </button>
                </form>
              </div>
            );
          })}
          <Link to={'/cart/checkout'}><button className="checkoutBtn">Checkout</button></Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchCart: () => dispatch(fetchCart()),
  updateCart: (productId, cartItem) =>
    dispatch(updateCart(productId, cartItem)),
  deleteCart: (productId) => dispatch(deleteCart(productId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);