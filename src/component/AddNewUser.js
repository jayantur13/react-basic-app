import React from "react";
import axios from "axios";

class AddNewUser extends React.Component {
  //Let us take values for input
  //First initialise value with blank
  //Make the functions aware of the change
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "male", //default value
      dob: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    //e.target contains name,value id and other properties
    const { name, value } = e.target;
    //Set the changed values in the state
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const URL = "http://localhost:3001/users";
    axios
      .post(URL, this.state)
      .then((res) => {
        alert("Successfully added");
        //clear the form and set to default state
        this.setState({
          firstName: "",
          lastName: "",
          gender: "male", //default value
          dob: "",
          email: "",
        });
        window.location.replace("/getuser");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container mt-3 col-sm-6 justify-content-center">
        <h4 className="text-center">Add a new user!</h4>
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email" className="form-label">
                Select gender:
              </label>
              <select
                className="form-select"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="dob">DOB:</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={this.state.dob}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-block"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewUser;
