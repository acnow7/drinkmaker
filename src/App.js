import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [poke, setPokeList] = useState([]);
  

  useEffect(() => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.drinks);
    setPokeList(data.drinks)
  })
}, []);


  const list = poke.map((name1, index) => (
    <p className="listClick"
      key={index}
          >
      {name1.strDrink}
    </p>
  ));

  return (
    <>
    <div>
          {list}
    </div>
    </>
  );
}

export default App;
