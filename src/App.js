import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {

  const [category, setCategory] = useState('Hola Mundo');

  const handleCategory = (item) => {
    setCategory(item);
  }

  return (
    <div className="App">
      <NavBar handleCategory={handleCategory}/>
      <h1 className="center">{category}</h1>
    </div>
  );
}

export default App;
