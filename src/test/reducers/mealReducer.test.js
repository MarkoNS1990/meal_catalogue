import { FETCH_MEALS_BEGIN, FETCH_MEALS_FAILURE, FETCH_MEALS_SUCCESS, GET_RANDOM_MEAL, GET_SINGLE_MEAL, SEARCH_MEAL } from "../../redux/meal/mealTypes"
  import mealReducer from '../../redux/meal/mealReducer';
  
  const initialState = {
    meals: [],
    loading: false,
    error: '',
  };
  
  describe('meals mealsReducer', () => {
    it('returns the initial state', () => {
      expect(mealReducer(undefined, {})).toEqual(initialState);
    });
  
    it('handles begining of the fetch', () => {
      expect(mealReducer(initialState, { type: FETCH_MEALS_BEGIN })).toEqual({
        ...initialState,
        loading: true,
        error: '',
      });
    });
  
    it('handles succeeded fetch', () => {
      expect(mealReducer(initialState, {
        type: FETCH_MEALS_SUCCESS,
        meals: [],
      })).toEqual({
        ...initialState,
        loading: false,
        meals: undefined,
      });
    });
  
  
    
  });