import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserData extends Component {
  handleDelete = () => {
    const URL = "http://localhost:3001/users";
    let id = this.props.item.id;
    let name = this.props.item.firstName;
    if (window.confirm(`Confirm ? Delete the entry name - ${name}`)) {
      axios
        .delete(URL + "/" + id)
        .then((res) => {
          this.props.getUser(); //Reload user;refresh
        })
        .catch((err) => {
          console.log(err);
        });
    } //cancelled
  };

  render() {
    //prop from GetUser.js
    const { item } = this.props;
    return (
      <tr>
        <td className="text-center">{item.id}</td>
        <td className="text-center">{item.firstName}</td>
        <td className="text-center">{item.lastName}</td>
        <td className="text-center">{item.gender}</td>
        <td className="text-center">{item.email}</td>
        <td className="text-center">{item.dob}</td>
        <td className="text-center">
          <Link
            to={`/updateuser/id=${item.id}`}
            className="btn btn-outline-info"
          >
            Update
          </Link>
        </td>
        <td className="text-center">
          <button
            className="btn btn-outline-danger"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
