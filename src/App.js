import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Route } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);


  useEffect(() => {
      axios.get("https://614d9f35e3cf1f001712d223.mockapi.io/card").then(res => {
        setItems(res.data)
      })
        axios.get("https://614d9f35e3cf1f001712d223.mockapi.io/cart").then(res => {
          setCartItems(res.data)})
  }, []);

  
  const onAddToCart = (obj) => {
    axios.post("https://614d9f35e3cf1f001712d223.mockapi.io/cart", obj)
    setCartItems(prev => [...prev, obj])
  }

  const removeItem = (id) => {
    axios.delete(`https://614d9f35e3cf1f001712d223.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddFavorites = (obj) => {
    console.log(obj);
    axios.post("https://614d9f35e3cf1f001712d223.mockapi.io/favorites", obj)
    setFavorites(prev => [...prev, obj])
  }


  return (
    <div className="wrapper">
      {cartOpen && <SideBar onClose={() => setCartOpen(false)} items={cartItems} removeItem={removeItem}/>}
      <Header onClickCart={() => setCartOpen(true)} />
      <Route path="/" exact>
        <Home 
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onAddFavorites={onAddFavorites}
          onAddToCart={onAddToCart}
        />
      </Route>


      <Route>
          <Favorites />
      </Route>
    </div>
  );
}
export default App;
