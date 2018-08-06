import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {clearState, toggleState, editFormToDefault} from '../actions/'
import Recipes from './recipes.js'
import AllRecipes from './allRecipes'

class Menu extends Component {
  render() {
    return (
      <div id="Menu">
        <h1>Recipe App</h1>
        <button onClick={() => {
          document.getElementById("addRecipeForm").classList.add('visible')
          if (document.getElementById("singleRecipe").classList.contains('visible')) {
            document.getElementById("singleRecipe").classList.remove('visible')
          }
          document.getElementById("show_btn").innerHTML = 'Show all recipes'
          if (document.getElementById("allRecipes").classList.contains('visible')) {
            document.getElementById("allRecipes").classList.remove('visible')
          }
        }}>Add a new recipe</button><br />
        <button id="show_btn" onClick={() => {
          this.props.toggleState()
          this.props.editFormToDefault()
          if (document.getElementById("singleRecipe").classList.contains('visible')) {
            document.getElementById("singleRecipe").classList.remove('visible')
          }
        }}>Show all recipes</button><br />
        <button id="remove_btn" onClick={() => {
          this.props.clearState()
          if (document.getElementById("singleRecipe").classList.contains('visible')) {
            document.getElementById("singleRecipe").classList.remove('visible')
          }
          document.getElementById("allRecipes").classList.remove('visible')
          document.getElementById("addRecipeForm").classList.remove('visible')
          document.getElementById("show_btn").innerHTML = 'Show all recipes'
        }}>Remove all recipes</button>
        <h2 id="recipeList">Recipe List:</h2>
        <Recipes />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({clearState, toggleState, editFormToDefault}, dispatch)

export default connect(() => {}, mapDispatchToProps)(Menu)
