import axios from 'axios';
import React, { useState } from 'react';


import style from './Orders.module.scss'



const Orders = () => {

  const [orders, setOrders] = useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://615c3596c298130017735fd3.mockapi.io/orders')
      // console.log(data.map(item => item.items).flat());
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    })()
  }, [])

  const myStyle = {
    fontSize: '1.4vw',
    fontWeight: '600',
    color: '#bebebe'
  }

  const flex = {
    display: 'flex',
    flexWrap: 'wrap'
  }


  return (
    <div className="content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            justifyContent: "space-between",
          }}
        >
          <h1>Мои закладки</h1>
        </div>
        <div style={flex}>
        {
          orders.map((item, index) => (
            <div className={style.card}>
            <h5
              style={myStyle}
            >{index+1}</h5>
              <>
              <div className={style.favorite}>
          </div>
          <img width={133} height={112} src={item.imgURL} alt="Music" />
          <h5>
            {item.title}
          </h5>
          <div className={style.cardBottom}>
          <div className={style.cardPrice}>
          </div>
        </div>
              </>
      </div>
          ))
        }
        </div>
      </div>
  );
}

export default Orders;
