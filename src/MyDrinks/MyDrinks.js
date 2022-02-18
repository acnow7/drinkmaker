import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'



function MyDrinks({myDrink}) {
   console.log(myDrink)

  const [removeDrink, setRemoveDrink] = useState(" ")
  
  


  const drinks = myDrink.map(drink1 => {
    return(
      <>
<div className="card">
       <h1 className="h1-random">{drink1.strDrink}</h1>

     <img className="card-img-top" src={drink1.strDrinkThumb} alt="Card image cap" />
   

     <div className="card-body">
   
  
       <div className="d-block d-md-flex">
   
         <div className="p-3 flex-1">
   
           <h2 className="pb-3 font-weight-bold">Ingredients</h2>
           <p align="justify">{drink1.strIngredient1}<br></br>{drink1.strIngredient2}<br></br>{drink1.strIngredient3}<br></br>{drink1.strIngredient4}<br></br>{drink1.strIngredient5}<br></br>{drink1.strIngredient6}<br></br>{drink1.strIngredient7}</p>
   
         </div>
      
         <div className="p-3 flex-1">
   
           <h2 className="pb-3 font-weight-bold">Measures</h2>
           <p align="justify">{drink1.strMeasure1}<br></br>{drink1.strMeasure2}<br></br>{drink1.strMeasure3}<br></br>{drink1.strMeasure4}<br></br>{drink1.strMeasure5}<br></br>{drink1.strMeasure6}<br></br>{drink1.strMeasure7}<br></br></p>
   
         </div>
        
         <div className="p-3 flex-1">
   
           <h2 className="pb-3 font-weight-bold">Instructions</h2>
           <p align="justify">{drink1.strInstructions}</p>
   
         </div>
       
   
       </div>
       
   
     </div>
</div>
<div>
<p className="p-Button1"><button type="button" className="btn btn-secondary btn-sm" onClick={() => { console.log(myDrink.indexOf(drink1), setRemoveDrink(myDrink.indexOf(drink1)), removeDrinks())}}>Remove from your Drinks  -</button></p>
   </div>

</>
  )})

  function removeDrinks() {
    myDrink.splice(removeDrink,1)
  }


  if (myDrink.length >= 1 ) {
    return (
      <div>
       
{drinks}              
     
  </div>
      );
  } else {
    return (
      <div>Your list is Empty</div>
    )
  }}


export default MyDrinks
