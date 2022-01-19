import React from "react";
import { connect } from "react-redux";
import { fetchCart, updateCart } from "../store/cart";
import { Link } from "react-router-dom";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      this.props.fetchCart(this.props.match.params.cartId);
      localStorage.setItem('currentCartId', JSON.parse(this.props.match.params.cartId))
    } catch (err) {
      console.log(err);
    }
  }

  // handleChange(evt) {
  //   this.setState({
  //     quantity: evt.target.value,
  //   });
  // }

  //  handleSubmit(evt) {
  //     evt.preventDefault();
  //     this.props.updateCart(
  //       this.props.match.params.cartId,
  //       this.props.match.params.productId
  //     );
  //     this.props.fetchCart(this.props.match.params.cartId);
  //   }

  render() {
    console.log('+++++++++PROPS: ', this.props)
    //console.log('THIS.STATE: ///////', this.state.quantity);
    return (
      // <div>HELLO WORLD</div>
      <div>
        <div className="cart" id="cart">
          {this.props.cartItems.map((cartItem) => {
            return (
              <div key={cartItem.productId}>
                <img src={cartItem.imageUrl}></img>
                <h2>{cartItem.name}</h2>
                <h2>Price: {cartItem.price}</h2>
                <h2>Quantity: {cartItem.quantity}</h2>
                <form
                  id="update-quantity"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    this.props.updateCart(cartItem.cartId, cartItem.productId);
                  }}
                >
                  <label htmlFor="quantity"></label>
                  <input
                    onChange={(evt) => {
                      this.setState({ quantity: evt.target.value });
                    }}
                    value={this.state.quantity}
                  />
                  <button type="submit">Update Quantity</button>
                </form>
              </div>
            );
          })}
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
  fetchCart: (cartId) => dispatch(fetchCart(cartId)),
  updateCart: (cartId, productId) => dispatch(updateCart(cartId, productId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

