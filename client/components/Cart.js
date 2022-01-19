import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import { Link } from "react-router-dom";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart(this.props.match.params.cartId);
  }

  render() {
    console.log('lala', this.props.cartItems)
    return (
      <div className='cart' id ='cart'>
          {this.props.cartItems.map((cartItem) => {
            return (
              <div key={cartItem.productId}>
                <img src={cartItem.imageUrl}></img>
                <h2>{cartItem.name}</h2>
                <h2>Price:{cartItem.price}</h2>
              </div>
            );
          })}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
