import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Page404 from "./component/Page404";
import AddNewUser from "./component/AddNewUser";
import GetUser from "./component/GetUser";
import React from "react";
import UpdateForm from "./component/UpdateForm";

class App extends React.Component {
  //This is the index page or root (/)
  //Routes is parent component inside (children) { Navigate, Route }
  //As index ("/") is empty navigate to GetUser component
  //If user entered a wrong url(path is *,'',no path) hit with a 404 not found page
  render() {
    //Destructure state take out data and error and objects
    //Send them to GetUser as props (object)
    //const {data,error} = this.state;
    //As index (/) is empty,navigate to /getuser
    //index can be set for /home without path but element <home/>
    return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/getuser" />} />
          <Route path="/getuser" element={<GetUser />} />
          <Route path="/addnewuser" element={<AddNewUser />} />
          <Route path="/updateuser/:id" element={<UpdateForm />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;
