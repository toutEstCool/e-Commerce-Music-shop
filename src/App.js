import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { MainContext } from "./context";
import axios from 'axios'

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";



function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] =useState(true)

  const [order, setOrder] = useState(null)

  const allPrice = cartItems.reduce((currentValue, nextValue) => currentValue += nextValue.price, 0)
  
  useEffect(() => {
    async function myData () {
      try {
        const [ responseCart, responseFavorites, responseCard ] = await Promise.all([
          axios.get("https://615c3596c298130017735fd3.mockapi.io/cart"),
          axios.get("https://615c3596c298130017735fd3.mockapi.io/favorites"),
          axios.get("https://615c3596c298130017735fd3.mockapi.io/card")
        ])

        setLoading(false)

        setCartItems(responseCart.data)
        setFavorites(responseFavorites.data)
        setItems(responseCard.data)

      } catch (error) {
        alert('Произошла ошибка :(')
      }
    }

    myData()
  }, []);


  const onAddToCart = async obj => {
    try{
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        await axios.delete(`https://615c3596c298130017735fd3.mockapi.io/cart/${findItem.id}`)
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
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

  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  const delayMy = () => new Promise(resolve => setTimeout(resolve, 1000))

  const buyExample = async () => {
    try {
      const { data } = await axios.post('https://615c3596c298130017735fd3.mockapi.io/orders', {
        items: cartItems
      })
      setOrder(data.id)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete('https://615c3596c298130017735fd3.mockapi.io/cart/' + item.id)
        await delayMy()
      }
    } catch (error) {
      console.log(error);
    }
  }


  

   return (
    <MainContext.Provider value={ { items, cartItems, favorites, isItemAdded, buyExample } }>
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

      <Route path='/orders'>
        <Orders />
      </Route>

    </div>
    </MainContext.Provider>
  );
}
export default App;
