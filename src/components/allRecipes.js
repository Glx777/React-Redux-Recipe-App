import React, {Component} from 'react'
import {connect} from 'react-redux'
import AllRecipe from './allRecipe'

class AllRecipes extends Component {
  render() {
    return (
      <div id="allRecipes" className="hidden">
        {this.props.recipes.map((recipe, i) =>
          <AllRecipe key={i} name={recipe[0]} recipeId={i} ingridients={recipe[1]} visible={recipe[2]} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(AllRecipes)
