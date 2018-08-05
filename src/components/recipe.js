import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {showSingleRecipe} from '../actions'

class Recipe extends Component {
  render() {
    return (
      <div class="recipeName" onClick={() => {
        document.getElementById("addRecipeForm").classList.remove('visible')
        document.getElementById("allRecipes").classList.remove('visible')
        document.getElementById("show_btn").innerHTML = 'Show all recipes'
        document.getElementById("singleRecipe").classList.add('visible')
        this.props.showSingleRecipe(this.props.recipeId)
      }}>{this.props.name}</div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({showSingleRecipe}, dispatch)

export default connect(() => {}, mapDispatchToProps)(Recipe)
