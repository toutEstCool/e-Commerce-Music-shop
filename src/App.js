import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { MainContext } from "./context";
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
  const [loading, setLoading] =useState(true)

  const allPrice = cartItems.reduce((currentValue, nextValue) => currentValue += nextValue.price, 0)
  
  useEffect(() => {
    async function myData () {

      const responseCart = await axios.get("https://615c3596c298130017735fd3.mockapi.io/cart")
      const responseFavorites = await axios.get("https://615c3596c298130017735fd3.mockapi.io/favorites")
      const responseCard = await axios.get("https://615c3596c298130017735fd3.mockapi.io/card")

      setLoading(false)

      setCartItems(responseCart.data)
      setFavorites(responseFavorites.data)
      setItems(responseCard.data)
    }

    myData()
  }, []);


  const onAddToCart = async obj => {
    try{
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://615c3596c298130017735fd3.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post(`https://615c3596c298130017735fd3.mockapi.io/cart`, obj)
        setCartItems(prev => [...prev, data])
        alert(JSON.stringify(obj.title))
      }
    }
    catch (error){
      console.error(error)
    }
  }

  const removeItem = id => {
    axios.delete(`https://615c3596c298130017735fd3.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }


  const onAddFavorites = async obj => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://615c3596c298130017735fd3.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://615c3596c298130017735fd3.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    }
    catch (error) {
      alert('Произошла ошибка...')
    }
  }
  



  return (
    <MainContext.Provider value={ { items, cartItems, favorites} }>
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
          cartItems={cartItems}
          loading={loading}
        />
      </Route>


      <Route path='/favorites'>
          <Favorites 
            onAddFavorites={onAddFavorites}
            // onAddToCart={onAddToCart}
          />
      </Route>
    </div>
    </MainContext.Provider>
  );
}
export default App;
