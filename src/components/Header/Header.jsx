import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/images/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 style={{textTransform: 'uppercase'}}>music store</h3>
          <p style={{opacity: '.5'}}>The most delicious music</p>
        </div>
      </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/images/cart.svg" alt="cart" />
            <span>1205 сом.</span>
          </li>
          <li>
            <img width={18} height={18} src="/images/user.svg" alt="user" />
          </li>
        </ul>
      </header>
  );
}

export default Header;
