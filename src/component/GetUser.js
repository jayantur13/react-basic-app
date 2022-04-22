import React, { Component } from "react";
import axios from "axios";
import UserData from "./UserData";

export default class GetUser extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  //Set the data and error in the state
  getUser = () => {
    const URL = "http://localhost:3001/users";
    axios
      .get(URL)
      .then((resp) => {
        this.setState({ data: resp.data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };

  render() {
    //We receive props here
    //data sent as "userlist"
    //error sent as "error"
    const { data, error } = this.state;
    //Lets map the userlist (data),
    //you cam write CSS if you don't want to use classNames

    //UserData is another component that holds the table data
    const userData =
      data.length > 0 &&
      data.map((item, index) => {
        return <UserData item={item} key={index} getUser={this.getUser} />;
      });
    if (error) {
      return (
        <div className="text-center mt-4">There is something wrong,check!</div>
      );
    } else {
      if (data.length > 0) {
        return (
          <table className="table mt-4">
            <thead className="bg-info text-light">
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">First Name</th>
                <th className="text-center">Last Name</th>
                <th className="text-center">Gender</th>
                <th className="text-center">Email</th>
                <th className="text-center">Dob</th>
                <th colSpan={2} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{userData}</tbody>
          </table>
        );
      } else {
        return (
          <div className="text-center mt-4">There is no data in database</div>
        );
      }
    }
  }
}
