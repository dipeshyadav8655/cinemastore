import React from "react";

function NavBar() {
  return (
    <div className="navBar">
      <div className="title">CinemaStore</div>
      <div className="genereContainer">
        <button className="genereButton">All</button>
        <button className="genereButton">Action</button>
        <button className="genereButton">Comedy</button>
        <button className="genereButton">Drama</button>
        <button className="genereButton">Horror</button>
        <button className="genereButton">Sci-Fi</button>
      </div>
    </div>
  );
}

export default NavBar;
