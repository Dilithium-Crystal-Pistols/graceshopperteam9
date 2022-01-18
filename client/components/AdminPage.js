import React from "react";
import { connect } from "react-redux";
import { fetchPosters } from "../store/posters";
import { Link } from "react-router-dom";
import { removeProduct } from "../store";
export class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosters();
    }

    render() {
        return (
            <div className="admin-page">
                {this.props.posters.map((poster) => {
                    return (
                        <div key={poster.id}>
                            <div>
                                <Link to='/add-product'> Add a Product</Link>
                            </div>
                            <Link to={`/posters/${poster.id}`}>
                                <img src={poster.imageUrl}></img>
                            </Link>
                            <h2>{poster.name}</h2>

                            <h2>Price:{poster.price}</h2>
                            <Link to={`/updateproduct/${poster.id}`}>
                                <button>Update</button>{" "}
                            </Link>
                            <button onClick={() => this.props.removeProduct(poster.id)}>
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posters: state.posters,
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchPosters: () => dispatch(fetchPosters()),
    removeProduct: (id) => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
