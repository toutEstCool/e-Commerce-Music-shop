import React, { useState } from 'react';
import ContentLoader from "react-content-loader"
import { MainContext } from '../../context';

import style from './Card.module.scss'

const Card = ({ id, title, price, imgURL, onPlus, onClickFavorites, stateHeart, added, loading }) => {
  const [isFavorite, setIsFavorite] = useState(stateHeart)

  const { isItemAdded } = React.useContext(MainContext)
  

  const obj = {title, price, imgURL, id, parentId: id}

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    onClickFavorites(obj)
    setIsFavorite(!isFavorite)
  }
  return (
    <div className={style.card}>
          {loading ? 
            <ContentLoader 
    speed={2}
    width={150}
    height={150}
    viewBox="0 0 150 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="1" y="59" rx="2" ry="2" width="208" height="80" /> 
    <circle cx="30" cy="41" r="19" />
  </ContentLoader> :
              <>
              <div className={style.favorite}>
            <img alt='Heart' onClick={onClickFavorite} src={isFavorite ? 'images/hearttrue.svg' : 'images/heartfalse.svg'}  />
          </div>
          <img width={133} height={112} src={imgURL} alt="Music" />
          <h5>
            {title}
          </h5>
          <div className={style.cardBottom}>
          <div className={style.cardPrice}>
            <span>Цена:</span>
            <b>{price} сом.</b>
          </div>
          <button className={style.button} onClick={() => onClickPlus()}>
            <img width={30} height={30} src={isItemAdded(id) ? 'images/addCard.svg': 'images/plus.svg'} alt="plus"/>
          </button>
        </div>
              </>
              }
      </div>
  );
}

export default Card;



