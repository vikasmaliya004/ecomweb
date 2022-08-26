import React from "react";
import Navbar from "./navbar";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="https://t4.ftcdn.net/jpg/03/20/68/71/360_F_320687108_3UZ13l44Ob5cel208W7DaRnD5BR9DfY7.jpg"
          class="card-img"
          alt="Background"
          height="500px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container"></div>
          <h5 class="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </h5>
          <p class="card-text lead fs-2">CHICK OU T ALL TRENDS</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
