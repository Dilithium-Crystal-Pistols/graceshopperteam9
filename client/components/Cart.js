import React from 'react'
import { connect } from 'react-redux'
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
                  <img></img>
                </div>
                <p>product name</p>
                <p>product price</p>
                <button>-</button>
                <button>+</button>
                <button>X</button>
              </div>
              <p>Total: productprice</p>

              <form onSubmit={() => this.handleSubmit(evt)}>
                <button type='submit'>checkout</button>
              </form>
                {/* <div id="poster-list">

                {this.props.posters.map((poster) => {
                    return (
                        <div key={poster.id}>
                            <Link to={`/posters/${poster.id}`}>
                            <img src={poster.imageUrl}></img>
                            </Link>
                            <h2>
                                {poster.name}
                            </h2>

                            <h2>
                                Price:{poster.price}
                            </h2>
                        </div>
                    )
                })}
                </div> */}

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

