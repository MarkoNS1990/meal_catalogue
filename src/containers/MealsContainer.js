import React ,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchMeal, fetchMeals } from '../redux/meal/mealActions'
import Loader from "react-loader-spinner";
import Meal from '../components/Meal';
import '../styles/MealsContainer.css'
import {Link} from 'react-router-dom'

function MealsContainer() {

    const dispatch = useDispatch()
    const meals = useSelector(state=>state.meals.meals)
    const loading = useSelector(state=>state.loading)
    const [category,setCategory] = useState('Seafood')

    useEffect(()=>{
        dispatch(fetchMeals(category))
        
    },[category])

    const onMealClick =(id)=>{
        dispatch(fetchMeal(id))
    }

    if(loading){
        return <Loader
        type="Puff"
        color="#rgb(194, 60, 60)"
        height={100}
        width={100}
      />
    }

    return (
        <>
        <div className="category">
        <h3>Select a category: </h3>
        <select name="category" id="category" onChange={(e)=>setCategory(e.target.value)}>
            <option value="Seafood">Seafood</option>
            <option value="Dessert">Dessert</option>
            <option value="Vegan">Vegan</option>
            <option value="Breakfast">Breakfast</option>
        </select>
        </div>
        <div className='card-list'>
        
        {meals && meals.map(meal=>
            <div key={meal.idMeal} onClick = {()=>onMealClick(meal.idMeal)}>
                <Link to={`meals/${meal.idMeal}`}>
                    <Meal meal={meal} />
                </Link>
            </div>
            )}
            
        </div>
        </>
        
    )
}

export default MealsContainer
