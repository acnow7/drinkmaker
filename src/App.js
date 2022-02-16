import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [drink, setDrink] = useState([]);
  

  useEffect(() => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.drinks);
    setDrink(data.drinks)
  })
}, []);


  const list = drink.map((name1, index) => (
    <p className="listClick"
      key={index}
          >
      {name1.strDrink}
      <img src={name1.strDrinkThumb} alt="drink" width={'150px'} />
      <button onClick={() => console.log(name1.strDrinkThumb)}>Add to My Team</button>
      
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
