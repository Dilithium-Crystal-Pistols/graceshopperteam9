import React from 'react'
import { connect } from 'react-redux'
import { updateCart, removeFromCart, setCarItems } from '../store/cart';
import { Link } from "react-router-dom";

export class CartItem extends React.Component{
    constructor(props) {
        super(props)   }


    render() {
      const { id, name, price, image, qty} = this.props.itemData;
        return (
              <div className='cart_product'>
                <div className='cart_image'>
                  image here
                  <img />
                </div>
                <div className='cart_item_info'>
                  <p>{name}</p>
                  <p>${price}</p>
                  <div className='cart_item_qty'>
                    <p>Qty {qty}</p>
                    <button>-</button>
                    <button>+</button>
                    <button>X</button>
                  </div>
                </div>
            </div>
        )
    }
};


export default CartItem;

