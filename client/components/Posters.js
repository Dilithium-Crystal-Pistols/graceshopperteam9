import React from 'react'
import { connect } from 'react-redux'
import { fetchPosters } from '../store/posters'

export class Posters extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("////////",this.props);
        this.props.fetchPosters()
    }

    render() {
        return (
            <div>
                {this.props.posters.map((poster) => {
                    return (
                        <div key={poster.id}>
                            <h3>
                                {poster.name}
                                {console.log(poster)}

                            </h3>
                        </div>
                    )
                })}

                
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

