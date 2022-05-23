import Home from "./Home/Home";
import MyDrinks from "./MyDrinks/MyDrinks"
import './App.css';
import { useState, useEffect } from "react";
import {Route, Link, Routes, } from 'react-router-dom'
import Footer from "./Footer/Footer";
import RandomDrink from "./RandomDrink/RandomDrink";
import About from "./About/About";
import Drinks from "./Drinks/Drinks";


function App() {
  const [drink, setDrink] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);
  const [myDrink, setMyDrink] = useState([]);





useEffect(() => {
    
    const url1 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {

      setRandomDrink(data.drinks)
    })
  }, []);
  
  


   function saveMyDrink (randomDrink) {
     const drinkAdd = [...myDrink];
     drinkAdd.push(randomDrink[0])
     setMyDrink(drinkAdd)
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
     <button type="button" className="btn btn-primary btn-sm" onClick={() => saveMyDrink(randomDrink)}>Add to my Drinks</button></p>
<p className="p-Button1"><button type="button" className="btn btn-secondary btn-sm" onClick={() => {
  const url1 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  fetch(url1)
  .then((response) => response.json())
  .then((data) => {

    setRandomDrink(data.drinks)
  })
}}>Get a new Drink  -</button></p>
   </div>
   
   
       </>
       ))
 

  return (
    <>
   <div className='header'>
    <img src='https://i.imgur.com/mMLM1Zj.png' alt='logo'  className ="logo"/>
   
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"><p className="navbar-link" >Home</p></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/RandomDrink"><p className="navbar-link" >Random Drink</p></Link>
        </li>
        <li className="nav-item">
        <Link to="/MyDrinks"><p className="navbar-link" >My Drinks</p></Link>
        </li>
        <li className="nav-item">
        <Link to="/About"><p className="navbar-link" >About</p></Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>


<main>
<Routes>
    <Route path='/' element={<Home drink={drink} setDrink={setDrink} />}/>
    <Route path='/MyDrinks' element={<MyDrinks myDrink={myDrink} setMyDrink={setMyDrink} />}  />   
    <Route path='/RandomDrink' element={<RandomDrink  slide1={slide1} />}  />   
    <Route path='/About' element={<About />} />
    <Route path='/MyDrinks/:alcohol' element={< Drinks />} />
  </Routes>
</main>
<Footer />
    </>
  );
}

export default App;
