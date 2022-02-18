import Home from "./Home/Home";
import MyDrinks from "./MyDrinks/MyDrinks"
import './App.css';
import { useState, useEffect } from "react";
import {Route, Link, Routes, } from 'react-router-dom'
import Footer from "./Footer/Footer";
import RandomDrink from "./RandomDrink/RandomDrink";

function App() {
  const [drink, setDrink] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
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
      <button onClick={() => console.log(name1.strDrinkThumb)}>Add to My Drinks</button>
      
    </p>
  ));

  useEffect(() => {
    const url1 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {

      setRandomDrink(data.drinks)
    })
  }, []);
  
  
   function refresh(event) {
     window.location.reload();
   }


  const slide1 = randomDrink.map((image1, index) => (
     <>
     <div className="card">
       <h1 className="h1-random">{image1.strDrink}</h1>

     <img className="card-img-top" src={image1.strDrinkThumb} alt="Card image cap" />
   

     <div className="card-body">
   
  
       <div className="d-block d-md-flex">
   
         <div className="p-3 flex-1">
   
           <h2 className="pb-3 font-weight-bold">Ingredients</h2>
           <p align="justify">{image1.strIngredient1}<br></br>{image1.strIngredient2}<br></br>{image1.strIngredient3}<br></br>{image1.strIngredient4}<br></br>{image1.strIngredient5}<br></br>{image1.strIngredient6}<br></br>{image1.strIngredient7}</p>
   
         </div>
      
         <div className="p-3 flex-1">
   
           <h2 className="pb-3 font-weight-bold">Measures</h2>
           <p align="justify">{image1.strMeasure1}<br></br>{image1.strMeasure2}<br></br>{image1.strMeasure3}<br></br>{image1.strMeasure4}<br></br>{image1.strMeasure5}<br></br>{image1.strMeasure6}<br></br>{image1.strMeasure7}<br></br></p>
   
         </div>
        
         <div className="p-3 flex-1">
   
           <h2 className="pb-3 font-weight-bold">Instructions</h2>
           <p align="justify">{image1.strInstructions}</p>
   
         </div>
       
   
       </div>
       
   
     </div>
     <p className="p-Button">
     <button type="button" className="btn btn-primary btn-sm">Add to my Drinks</button></p>
<p className="p-Button1"><button type="button" className="btn btn-secondary btn-sm" onClick={() => refresh()}>Get a new Drink  -</button></p>
   </div>
   
   
       </>
       ))
 

  return (
    <>
   <div className='header'>
    <img src='https://i.imgur.com/mMLM1Zj.png' alt='logo'  className ="logo"/>
   
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"><a className="navbar-link" >Home</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/RandomDrink"><a className="navbar-link" >Random Drink</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/MyDrinks"><a className="navbar-link" >My Drinks</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/MyDrinks"><a className="navbar-link" >About</a></Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>


<main>
<Routes>
    <Route path='/' element={<Home drink={drink} setDrink={setDrink} />}/>
    <Route path='/MyDrinks' element={<MyDrinks  />}  />   
    <Route path='/RandomDrink' element={<RandomDrink  slide1={slide1} />}  />   
  </Routes>
</main>
<Footer />
    </>
  );
}

export default App;
