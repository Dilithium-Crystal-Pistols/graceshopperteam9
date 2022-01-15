import React from "react";
import { connect } from "react-redux";
import { fetchSinglePoster } from "../store/singlePoster";
import { addToCart } from "../store";
import { Link } from "react-router-dom";

export class SinglePoster extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      await this.props.fetchSinglePoster(this.props.match.params.posterId);
    } catch (err) {
      console.log(err);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToCart(this.props.poster);
  }

  render() {
    const poster = this.props.poster;
    return (
      <div>
        <h1>{poster.name} </h1>
        <h2>Price: {poster.price} </h2>
        <h4>{poster.description}</h4>
        <img src={poster.imageUrl}></img>
        <form type="submit" onSubmit={() => this.handleSubmit(event)}>
          <button>Add to Cart</button>
        </form>
        <Link to="/cart">
          <button type="submit">Go to cart</button>
        </Link>
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
