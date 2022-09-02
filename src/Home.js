import React from "react";
// import Navbar from "./navbar";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://www.saturdayeveningpost.com/wp-content/uploads/satevepost/2020-08-17-woman-shopping-shutterstock-860x573.jpg"
          class="card-img"
          alt="Background"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container"></div>
          <h5 className="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </h5>
          <p className="card-text lead fs-1 " >CHICK OU T ALL TRENDS</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
