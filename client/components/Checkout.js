import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkout } from "../store/checkout";
import store from "../store";
export class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkout()
  }

  componentWillUnmount() {
  }

  render() {
    const { totalPrice } = this.props
    let user = store.getState().auth;
    return (
      <div className="checkout">
         <div className="checkout_info">
           <h1>Check Out</h1>
           <h2>Full Name</h2>
           <p>{user.fName} {user.lName}</p>
           <h2>Email</h2>
           <p>{user.email}</p>
           <h2>Address</h2>
           <p>{user.address}</p>
            <h3>Your Total is: $ {totalPrice}</h3>
            <button className="finalizeTransaction"
            // onClick={() => this.props.Checkout(this.props.cart)}
            >
            Finalize Transaction
          </button>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isLoggedIn: !!state.auth.id,
    totalPrice: state.checkout
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => dispatch(checkout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
