import React from "react";
import { connect } from "react-redux";
import { fetchSinglePoster } from "../store/singlePoster";

export class SinglePoster extends React.Component {
  constructor(props) {
    super(props);
  }

 async componentDidMount() {
      try{
        await this.props.fetchSinglePoster(this.props.match.params.posterId);
      } catch (err) {
          console.log(err);
      }
  }

  render() {
    const poster = this.props.poster;
    return (
      <div>
        <h1>{poster.name} </h1>
        <h2>Price: {poster.price} </h2>
        <h4>{poster.description}</h4>
        <img src={poster.imageUrl}></img>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePoster);
