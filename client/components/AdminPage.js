import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";
import { removeProduct } from "../store";
export class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
        <div className="product_container">
        <div id="product-list">
        <Link to="/admin/add-product" style={{color:'black'}}>Add a Product</Link>
          {this.props.products.map((product) => {
            return (
              <div className="posters_product" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img className="product-image" src={product.imageUrl}></img>
                </Link>
                <h2>{product.name}</h2>

                <h2>Price:{product.price}</h2>

                <Link to={`/updateproduct/${product.id}`}>
                  <button>Update</button>{" "}
                </Link>
                <button onClick={() => this.props.removeProduct(product.id)}>
                  Delete
                </button>
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
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
