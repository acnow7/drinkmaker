import Home from "./Home/Home";
import MyDrinks from "./MyDrinks/MyDrinks"
import './App.css';
import { useState, useEffect } from "react";
import {Route, Link, Routes, } from 'react-router-dom'

function App() {
  const [drink, setDrink] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
  
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

  useEffect(() => {
    const url1 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks[0].strDrinkThumb);
      setRandomDrink(data.drinks)
    })
  }, []);

  const slide1 = randomDrink.map((image1, index) => (
     <img src={image1.strDrinkThumb} alt='drink ' index={index} />
       ))
 console.log(slide1)

  return (
    <>
   <div className='header'>
    <img src='https://i.imgur.com/mMLM1Zj.png' alt='logo'  className ="logo"/>
   
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"><a className="navbar-brand" >Home</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Random Drink</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" aria-current="page">My drinks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">About</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>


<main>
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/MyDrinks' element={<MyDrinks  />}  />   
    
  </Routes>
</main>

    </>
  );
}

export default App;
