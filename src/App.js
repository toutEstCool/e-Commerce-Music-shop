import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import axios from 'axios'

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

  const allPrice = cartItems.reduce((currentValue, nextValue) => currentValue += nextValue.price, 0)
  
  useEffect(() => {
      axios.get("https://614d9f35e3cf1f001712d223.mockapi.io/card").then(res => {
        setItems(res.data)
      })
        axios.get("https://614d9f35e3cf1f001712d223.mockapi.io/cart").then(res => {
          setCartItems(res.data)
        })
        axios.get("https://614d9f35e3cf1f001712d223.mockapi.io/favorites").then(res => {
          setFavorites(res.data)
        })
  }, []);


  const onAddToCart = async (obj) => {
    const { data } = await axios.post("https://614d9f35e3cf1f001712d223.mockapi.io/cart", obj)
    setCartItems(prev => [...prev, data])
  }

  const removeItem = (id) => {
    axios.delete(`https://614d9f35e3cf1f001712d223.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }


  const onAddFavorites = async obj => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://614d9f35e3cf1f001712d223.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://614d9f35e3cf1f001712d223.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    }
    catch (error) {
      alert('Произошла ошибка...')
    }
  }
  



  return (
    <div className="wrapper">
      {cartOpen && <SideBar onClose={() => setCartOpen(false)} items={cartItems} removeItem={removeItem} allPrice={allPrice}/>}
      <Header onClickCart={() => setCartOpen(true)} allPrice={allPrice}/>
      <Route path="/" exact>
        <Home 
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onAddFavorites={onAddFavorites}
          onAddToCart={onAddToCart}
        />
      </Route>


      <Route path='/favorites'>
          <Favorites 
            favorites={favorites}
            onAddFavorites={onAddFavorites}
            onAddToCart={onAddToCart}
          />
      </Route>
    </div>
  );
}
export default App;
