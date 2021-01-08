import './App.css';
import { NavBarRB } from './components/NavBar/NavBarRB';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBarRB />
      <ItemListContainer text={"Saludos comprador"}/>
    </div>
  );
}

export default App;
