import React from 'react';

import { Link } from 'react-router-dom'

const Header = ({ onClickCart }) => {
  return (
    <header>
      <Link to="/">
      <div className="headerLeft">
        <img width={40} height={40} src="/images/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 style={{textTransform: 'uppercase'}}>music store</h3>
          <p style={{opacity: '.5'}}>The most delicious music</p>
        </div>
      </div>
      </Link>
        <ul className="headerRight">
          <li style={{cursor: 'pointer'}} onClick={onClickCart}> 
            <img width={18} height={18} src="/images/cart.svg" alt="cart" />
            <span>1205 сом.</span>
          </li>
          <li style={{cursor: 'pointer'}}>
            <Link to="/favorites">
              <img src="/images/favorite.svg" alt="favorite" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/images/user.svg" alt="user" />
          </li>
        </ul>
      </header>
  );
}

export default Header;
