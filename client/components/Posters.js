import React from 'react'
import { connect } from 'react-redux'
import { fetchPosters } from '../store/posters'
import { Link } from "react-router-dom";

export class Posters extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosters();
    }

    render() {
        return (
            <div className='posters_container'>
                <div id="poster-list">

                {this.props.posters.map((poster) => {
                    return (
                        <div className='posters_product' key={poster.id}>
                            <Link to={`/posters/${poster.id}`}>
                              <img className='posters_product-image' src={poster.imageUrl}></img>
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
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        posters: state.posters
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchPosters: () => dispatch(fetchPosters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posters);

