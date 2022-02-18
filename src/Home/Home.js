import { useState, useEffect } from "react";
import React from 'react'
import { Link } from 'react-router-dom' 

function Home({drink, setDrink}) {

    const [alcohol, setAlcohol] = useState("Gin");
    const [description, setDescription] = useState("")
    const [searchInput, setSearchInput] = useState("")


        useEffect(() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${alcohol}`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                
                
              
                setDescription(data.ingredients[0].strDescription)
              });
          }, [alcohol]);


          // const handleChange = (e) => {
          //   setSearchInput(e.target.value)
          // }
          // const handleSubmit = (e) => {
          //   e.preventDefault()
          //   setDrink(searchInput)
          // }


  return (
 <>
 <div className='form-search'>
<form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search your drink" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
</div>
    <div className="alcohol-Menu">
    <div className="row">
      <div className="col" onClick={() => setAlcohol("Gin")}>
        Gin
      </div>
      <div className="col" onClick={() => setAlcohol("Tequila")}>
        Tequila
      </div>
      <div className="col" onClick={() => setAlcohol("Brandy")}>
        Brandy
      </div>
      <div className="col" onClick={() => setAlcohol("Vodka")}>
        Vodka
      </div>
      <div className="col" onClick={() => setAlcohol("Whiskey")}>
        Whiskey
      </div>
      <div className="col" onClick={() => setAlcohol("Rum")}>
        Rum
      </div>
    </div>
  </div>
  <div className="home-Image">
 </div><div className="card text-center">
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <h5 className="card-title">{alcohol} origins</h5>
    <p className="card-text">{description}</p>
    <p className="btn btn-secondary" ><Link to={"/MyDrinks/" + alcohol }>Drinks</Link></p>
  </div>
  <div className="card-footer text-muted">
    
  </div>
</div>


  </>
  )
}

export default Home
