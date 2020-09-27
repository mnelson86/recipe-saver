import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className= "navbar nabvbar-expand-lg navbar-light bg-light">
            <div className= "navbar-brand">
                Recipe Search
            </div>
            <div>
            <div className = "navbar-nav">
          <div className='nav-item'>
            <span onClick={props.onClick} value = 'favorites' className='nav-link'>Favorites</span>
          </div>
          <div className = "nav-item">
            <span onClick={props.onClick} value = 'all-recipes' className='nav-link'>All Recipes</span>
          </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;