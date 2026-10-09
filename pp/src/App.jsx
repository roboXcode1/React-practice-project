import { Suspense, useState } from 'react'

import './App.css'
import Meals from './components/meals/Meals'

const mealPromies = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then (res => res.json())

function App() {


  return (

    <>
    <h4>The meal BD </h4>
     <Suspense fallback= {<p>Meal sheet loading....</p>}>
     <Meals mealPromies = {mealPromies}></Meals>
     </Suspense>
     
    </>
  )
}

export default App
