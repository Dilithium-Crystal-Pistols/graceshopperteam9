import React from 'react'
import { connect } from 'react-redux'
import { fetchPosters } from '../store/posters'

export class Posters extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosters();
    }

    render() {
        return (
            <div>
                <div id="poster-list">

                {this.props.posters.map((poster) => {
                    return (
                        <div key={poster.id}>
                            
                            <img src={poster.imageUrl}></img>
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

