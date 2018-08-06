import {combineReducers} from 'redux'
import {addRecipe, removeRecipe, showEditRecipeForm, hideEditRecipeForm, clearState, toggle, confirmEdit, showSingleRecipe} from '../actions/'

const recipeReducers = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      state = [...state, [action.name, action.ingridients, action.visible, action.shown]]
      break
    case 'REMOVE_RECIPE':
      state = state.slice()
      state.splice(action.recipeId, 1)
      break
    case 'CONFIRM_EDIT':
      state = state.slice()
      state[action.recipeId][0] = action.recipeName
      state[action.recipeId][1] = action.recipeIngridients
      state[action.recipeId][2] = false
      return state
      break
    case 'SHOW_EDIT_RECIPE_FORM':
      state = state.slice()
      state[action.recipeId][2] = true
      return state
      break
    case 'HIDE_EDIT_RECIPE_FORM':
      state = state.slice()
      state[action.recipeId][2] = false
      return state
    case 'CLEAR_STATE':
      document.getElementById("recipeList").innerHTML = 'Recipe List:'
      if (state.length === 0) {
        document.getElementById("recipeList").innerHTML = 'The List Is Empty'
      } else {
        document.getElementById("recipeList").innerHTML = 'The List Is Empty'
        state = []
      }
      break
    case 'TOGGLE_STATE':
      document.getElementById("show_btn").innerHTML = 'Show all recipes'
      if (state.length === 0) {
        document.getElementById("recipeList").innerHTML = 'The List Is Empty'
      } else {
        document.getElementById("recipeList").innerHTML = 'Recipe List:'
        if (document.getElementById("addRecipeForm").classList.contains('visible')) {
          document.getElementById("addRecipeForm").classList.remove('visible')
        }
        document.getElementById("allRecipes").classList.toggle('visible')
        if (document.getElementById("allRecipes").classList.contains('visible')) {
          document.getElementById("show_btn").innerHTML = 'Hide all recipes'
        } else {
          document.getElementById("show_btn").innerHTML = 'Show all recipes'
        }
      }
      break
      case 'SHOW_SINGLE_RECIPE':
        state = state.slice()
        state[action.payload][3] = true
        let b = action.payload
        for (let i = 0; i < state.length; i++) {
          if (i !== b) {
            document.getElementById(i).classList.remove('visible')
          } else {
            document.getElementById(action.payload).classList.add('visible')
          }
        }
        for (let i = 0; i < state.length; i++) {
          if (i !== action.payload) {
            state[i][3] = false
          }
        }
        return state
        break
      case 'EDIT_FORM_TO_DEFAULT':
        state = state.slice()
        for (let i = 0; i < state.length; i++) {
          state[i][2] = false
        }
        return state
    default:
      return state
  }
  return state
}

const reducers = combineReducers({
  recipes: recipeReducers
})

export default reducers
