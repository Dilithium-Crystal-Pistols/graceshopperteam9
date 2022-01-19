import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
//import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

 componentDidMount() {
      try{
        //const token = window.localStorage.token;
        this.props.fetchSingleProduct(this.props.match.params.productId);
      } catch (err) {
          console.log(err);
      }
  }

  render() {
    const product = this.props.product;
    return (
      <div className="singleProduct_container">
        <div className="singleProduct_image">
          <img src={product.imageUrl}></img>
        </div>
        <div className="SingleProduct_info">
          <h1 className="SingleProduct_info-productName">{product.name} </h1>
          <h2>Price: ${product.price} </h2>
          <h3>Description</h3>
          <p>{product.description}</p>
          <button className="addToCard_button" onClick={() => this.props.addToCart(this.props.product.id)}>
            Add to Cart
          </button>
          {/* <Link to="/cart/:cartId">
            <button className="singlePoster_info-goToCart">Go to cart</button>
          </Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleProduct: (productId) => dispatch(fetchSingleProduct(productId)),
    //addToCart: (posterId) => dispatch(addToCart(posterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
