import React from 'react';

const Card = () => {
  return (
    <div className="card">
          <div className="favorite">
            <img src="/images/heartfalse.svg" alt="heart" />
          </div>
          <img width={133} height={112} src="/images/music/1.jpg" alt="Music" />
          <h5>
            Виниловый Альбом
            Indie Music 1986
          </h5>
          <div className="cardBottom">
          <div className="cardPrice">
            <span>Цена:</span>
            <b>12 999 сом.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
  );
}

export default Card;
