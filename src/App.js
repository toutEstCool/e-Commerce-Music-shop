import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <Header />
      <div className="content">
      <div style={
        {display: 'flex',
        alignItems: 'center', 
        marginBottom: '40px', 
        justifyContent: 'space-between'}
        }>
        <h1>All Music</h1>
        <div className="search-block">
          <img src="/images/search.svg" alt="serch"/>
          <input type="text" placeholder="Поиск..."/>
        </div>
      </div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Card />
        </div>
    </div>
    </div>
  );
}

export default App;
