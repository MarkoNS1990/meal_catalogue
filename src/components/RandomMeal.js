import React ,{useEffect}  from 'react'
import {useDispatch} from 'react-redux'
import {connect} from 'react-redux'
import { fetchRandomMeal } from '../redux/meal/mealActions'
import '../styles/SingleMeal.css'

function RandomMeal({randomMeal}) {
     const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRandomMeal())
    },[])

    return (
        <div className='single-container'>
           {randomMeal && randomMeal.meals &&
            <>
            <h1>{randomMeal.meals[0].strMeal}</h1>
            
            <img src={randomMeal.meals[0].strMealThumb} alt={randomMeal.meals[0].strMeal} className='single-img' />
            
            
            <p className='instructions'>{randomMeal.meals[0].strInstructions}</p>
            </>
        }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        randomMeal:state.randomMeal.randomMeal
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchRandomMeal: ()=>dispatch(fetchRandomMeal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RandomMeal)
