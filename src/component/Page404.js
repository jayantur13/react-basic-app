import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="container text-center mt-5">
      <h4>This page is not available [Status Code:404]</h4>
      <br />
      <p>
        <Link to="/getuser">Go to Home</Link>
      </p>
    </div>
  );
};

export default Page404;
