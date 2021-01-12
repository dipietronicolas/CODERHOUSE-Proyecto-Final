import './App.css';
import { NavBarRB } from './components/NavBar/NavBarRB';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <NavBarRB />
      <div className='item-list-container'>
        <ItemListContainer
          text={"Saludos comprador"} />
      </div>
    </div>
  );
}

export default App;
