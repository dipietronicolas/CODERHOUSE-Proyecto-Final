import React, { useState, useEffect } from 'react';
import './NavBarDropdown.css';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase'; 

export const NavBarDropdown = () => {

  const [categories, setCategories] = useState();
  const [items, setItems] = useState([]);

  // Efecto que trae los items de firestore para settear las categorias
  useEffect( () => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection.get().then((querySnapshot) => {
      querySnapshot.size === 0 && console.log("Sin resultados!");
      setItems(querySnapshot.docs.map((doc) =>{
        return {
          id: doc.id,
          ...doc.data()
        };
      }))
    }).catch((error) => console.log("error"));
  }, [])

  
  // Efecto que settea las categorias
  useEffect(()=>{
    let filteredCategories = [];

    for (const item of items) {
      const itemCategory = item.category;
      if(filteredCategories.indexOf(itemCategory) === -1){
        filteredCategories.push(itemCategory);
      }
    }
    filteredCategories = filteredCategories.map((item, index) => {
      return (
        <li key={index}>
          <Link 
            to={`/category/${item}`} 
            className="dropdown-link" 
            style={{ textDecoration: 'none' }}
            onClick={handleDropdownFade}>
              {item}
          </Link>
        </li>
      )
    })
    setCategories(filteredCategories);
  }, [items]);

  const handleDropdownFade = () => {
    const dropdownList = document.querySelector('.dropdown-list');
    setTimeout(() => {
      dropdownList.classList.toggle('dropdown-active');
    }, 300);
  }

  const handleDropdownFocus = () => {
    const dropdownList = document.querySelector('.dropdown-list');
    setTimeout(() => {
      dropdownList.classList.remove('dropdown-active');
    }, 500);
  }

  return (
    <div className="Navbar-dropdown">
      
      <button 
        className="dropdown-button"
        onClick={handleDropdownFade}
        onBlur={handleDropdownFocus}>CATEGORIAS <i className="fas fa-caret-down"></i>
      </button>
      
      <ul className="dropdown-list">
        {
          categories && categories
        }
      </ul>
    </div>
  )
}
