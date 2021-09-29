
function App() {
  return (
    <div className="wrapper">
      <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/images/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 style={{textTransform: 'uppercase'}}>music store</h3>
          <p style={{opacity: '.5'}}>The most delicious music</p>
        </div>
      </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/images/cart.svg" alt="cart" />
            <span>1205 сом.</span>
          </li>
          <li>
            <img width={18} height={18} src="/images/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 style={{marginBottom: '40px'}}>All Music</h1>

        <div className="card">
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
    </div>
    </div>
  );
}

export default App;
