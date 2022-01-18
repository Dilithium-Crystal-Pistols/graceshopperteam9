import React from 'react'
import { connect } from 'react-redux'
import { updateCart, removeFromCart, setCarItems } from '../store/cart';
import { Link } from "react-router-dom";
import { CartItem } from './CartItem';
import SinglePoster from './SinglePoster';

export class Cart extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      this.props.setCarItems()

    }

    handleSubmit(evt) {
      evt.preventDefault()
    }

    render() {
      const itemsInCart =  this.props.cartItems.itemsInCart;
      const totalPrice = 0;
        return (
            <div className='cart'>
              {
                itemsInCart.map((item) => {
                  return (
                    <CartItem  key={item.superheroId} itemData={item}/>
                  )
                })
              }

              <div className='cartFooter'>
                <p>Total: {totalPrice}</p>
                <form onSubmit={() => this.handleSubmit(evt)}>
                  <button type='submit'>checkout</button>
                </form>
              </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart
    };
};

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: () => dispatch(removeFromCart),
    updateCart: () => dispatch(updateCart),
    setCarItems: () => dispatch(setCarItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

