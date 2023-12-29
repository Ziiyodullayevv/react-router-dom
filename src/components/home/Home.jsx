import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/users");
  }
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        <Link to={"/users"}>Users Page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate Users</button>
      </p>
    </div>
  );
};

export default Home;
