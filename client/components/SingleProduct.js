import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }

 componentDidMount() {
      try{
        this.props.fetchSingleProduct(this.props.match.params.productId);
      } catch (err) {
          console.log(err);
      }
  }

  render() {
    const product = this.props.product;

    return (
      <div>
        <h1>{product.name} </h1>
        <h2>Price: {product.price} </h2>
        <h4>{product.description}</h4>
        <img src={product.imageUrl}></img>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
