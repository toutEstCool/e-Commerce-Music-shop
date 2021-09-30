import React from 'react';

const SideBar = ({ onClose, items = [], removeItem }) => {
  console.log(items);
  return (
    <div className="sideBarBlock">
    <div className="sideBar">
    <h2 style={{marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      Корзина
      <img style={{cursor: 'pointer', opacity: '.5'}} width={22} height={22} src="/images/close.svg" alt="close" onClick={onClose}/>
    </h2>
    <div className="items">
    {
      items.map(item => (
        <div className="cartItem" style={{display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '20px'}}>
      <img style={{marginRight: '5px'}} width={70} height={70} src={item.img} alt="music" />
      <div>
        <p style={{marginBottom: '5px', color: '#000'}}>{item.title}</p>
        <b style={{color: '#000'}}>{item.price} сом.</b>
      </div>
      <img onClick={() => removeItem(item.id)} style={{cursor: 'pointer', opacity: '.5'}} width={22} height={22} src="/images/close.svg" alt="close" />
    </div>
      ))
    }
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



