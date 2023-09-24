import React, { useEffect, useState } from "react";

import classes from './AvailableMeals.module.css'
import Card from "../Layout/UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setloading] = useState(true)
  const [httpError, setHttpError] = useState()

  const fetchMeals = async () =>{
    try{
      const response = await fetch('https://restaurant-app-3f077-default-rtdb.firebaseio.com/meals')
      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      
      const responseData = await response.json()
  
      const loadedMeals = []
  
      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
  
      setMeals(loadedMeals)
      setloading(false)
    }
    catch(error){
      setloading(false)
      setHttpError(error.message)
    }
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  if(loading){
    return  <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){
    return  <section className={classes.MealsError}>
          {httpError}
     </section>
  }

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
