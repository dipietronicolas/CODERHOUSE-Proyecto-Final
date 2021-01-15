import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='home'>
        <ItemListContainer
          text={"Saludos comprador"} />
      </div>
    </div>
  );
}

export default App;
