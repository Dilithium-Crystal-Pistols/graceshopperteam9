import React from "react";
import { connect } from "react-redux";
import { fetchSinglePoster } from "../store/singlePoster";
import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";
import timespan from "jsonwebtoken/lib/timespan";
export class SinglePoster extends React.Component {
  async componentDidMount() {
    let currentItem = this.props.match.params.posterId;
    try {
      await this.props.fetchSinglePoster(currentItem);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const poster = this.props.poster;
    return (
      <div className="singlePoster_container">
        <div className="singlePoster_image">
          <img src={poster.imageUrl}></img>
        </div>
        <div className="SinglePoster_info">
          <h1 className="SinglePoster_info-productName">{poster.name} </h1>
          <h2>Price: ${poster.price} </h2>
          <h3>Description</h3>
          <p>{poster.description}</p>
          <button className="addToCard_button" onClick={() => this.props.addToCart(this.props.poster.id)}>
            Add to Cart
          </button>
          <Link to="/cart/:cartId">
            <button className="singlePoster_info-goToCart">Go to cart</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    poster: state.singlePoster,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSinglePoster: (posterId) => dispatch(fetchSinglePoster(posterId)),
    addToCart: (posterId) => dispatch(addToCart(posterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePoster);
