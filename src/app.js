import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import './styles/styles.scss'
import Menu from './components/menu'
import AddRecipe from './components/addRecipeForm'
import AllRecipes from './components/allRecipes'
import Recipe from './components/recipe'
import SingleRecipes from './components/singleRecipes'

const myState = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : {}
let store = createStore(reducers, myState)

store.subscribe(() => {
  localStorage.setItem('recipes', JSON.stringify(store.getState()))
})

class App extends Component {
  render() {
    return (
      <div id="container">
        <Menu />
        <div id="content">
          <AddRecipe />
          <AllRecipes />
          <Recipe />
          <SingleRecipes />
        </div>
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-container")
)
