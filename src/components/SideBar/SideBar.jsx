import React from 'react';

const SideBar = () => {
  return (
    <div className="sideBarBlock" style={{display: 'none'}}>
    <div className="sideBar">
    <h2 style={{marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      Корзина
      <img style={{cursor: 'pointer', opacity: '.5'}} width={22} height={22} src="/images/close.svg" alt="close" />
    </h2>
    <div className="items">
    <div className="cartItem" style={{display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '20px'}}>
      <img style={{marginRight: '5px'}} width={70} height={70} src="/images/music/1.jpg" alt="music" />
      <div>
        <p style={{marginBottom: '5px', color: '#000'}}>Виниловый Альбом Universal Human</p>
        <b style={{color: '#000'}}>8 499 сом.</b>
      </div>
      <img style={{cursor: 'pointer', opacity: '.5'}} width={22} height={22} src="/images/close.svg" alt="close" />
    </div>
    <div className="cartTotalBlock">
      <ul>
        <li>
          <span>Итого:</span>
          <div></div>
          <b>21 498 сом.</b>
        </li>
        <li>
          <span>Ндс 7%:</span>
          <div></div>
          <b>1074 сом.</b>
        </li>
      </ul>
    <button className="myButton">Оформить заказ <img src="/images/arrow.svg" alt="arrow"/></button>
    </div>
    </div>
  </div>
  </div>
  );
}

export default SideBar;
