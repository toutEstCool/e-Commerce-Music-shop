import React, { useState } from 'react';

import style from './Card.module.scss'

const Card = ({ title, price, img, onPlus, onClickFavorites }) => {
  const [addCard, setAddCard] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onClickPlus = () => {
    onPlus({title, price, img})
    setAddCard(!addCard)
  }

  const onClickFavorite = () => {
    onClickFavorites({ title, price, img, onPlus })
    setIsFavorite(!isFavorite)
  }
  return (
    <div className={style.card}>
          <div className={style.favorite}>
            <img onClick={onClickFavorite}  src={isFavorite ? '/images/hearttrue.svg'  : '/images/heartfalse.svg'}  />
          </div>
          <img width={133} height={112} src={img} alt="Music" />
          <h5>
            {title}
          </h5>
          <div className={style.cardBottom}>
          <div className={style.cardPrice}>
            <span>Цена:</span>
            <b>{price} сом.</b>
          </div>
          <button className={style.button} onClick={() => onClickPlus()}>
            <img width={30} height={30} src={addCard ? '/images/addCard.svg': '/images/plus.svg'} alt="plus"/>
          </button>
        </div>
      </div>
  );
}

export default Card;
