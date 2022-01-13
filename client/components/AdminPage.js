import React from 'react'
import { connect } from 'react-redux'
import { fetchPosters } from '../store/posters'
import { Link } from "react-router-dom";

export class AdminPage extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosters();
    }

    render() {
        return (
            <div className="admin-page">

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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);

