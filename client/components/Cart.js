import React from 'react'
import { connect } from 'react-redux'
import { fetchPosters } from '../store';
import { updateCart, removeFromCart } from '../store';
import { Link } from "react-router-dom";

export class Cart extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getCartItems();
        console.log(this.props)
    }

    handleSubmit(evt) {
      evt.preventDefault()
    }

    render() {
        return (
            <div className='cart'>

              <div className='cart_product'>
                <div className='cart_image'>
                  image here
                  <img />
                </div>
                <div className='cart_item_info'>
                  <p>product name</p>
                  <p>product price</p>
                  <div className='cart_item_qty'>
                    <p>Qty NumberHere</p>
                    <button>-</button>
                    <button>+</button>
                    <button>X</button>
                  </div>
                </div>
              </div>


              <div className='cartFooter'>
                <p>Total: cartPrice</p>
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
      getCartItems: state.posters
    };
};

const mapDispatchToProps = (dispatch) => ({

    removeFromCart: () => dispatch(removeFromCart),
    updateCart: () => dispatch(updateCart)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

