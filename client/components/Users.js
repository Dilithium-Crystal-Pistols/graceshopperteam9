import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";
import { fetchUsers } from "../store/users";

export class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(this.props);
    this.props.fetchUsers();
  }

    render() {
      {console.log('in render',this.props)}
    return (
      <div className="product_container">
        <div id="product-list">
          {this.props.users.map((user) => {
            return (
              <div className="posters_product" key={user.id}>
                <h2>Name: {`${user.fName} ${user.lName}`}</h2>
                <h2>Email: { user.email}</h2>
                <h2>Address: { user.address}</h2>

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
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
