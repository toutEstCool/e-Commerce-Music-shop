import React from 'react';

import Card from '../components/Card/Card'


const Home = ({ items, searchValue, setSearchValue, onAddFavorites, onAddToCart }) => {
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
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'All Music'}</h1>
          <div className="search-block">
            <img src="/images/search.svg" alt="serch" />
            {searchValue && <img className="clear" width={22} height={22} src="/images/close.svg" alt="close" onClick={() => setSearchValue('')}/>}
            <input
               type="text" 
               placeholder="Поиск..." 
               value={searchValue}
               onChange={event => setSearchValue(event.target.value)}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.filter(title => title.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.imgURL}
              onClickFavorites = {(obj) => onAddFavorites(obj)}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    );
}

export default Home;
