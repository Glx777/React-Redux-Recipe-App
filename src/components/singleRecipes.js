import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleRecipe from './singleRecipe'

class SingleRecipes extends Component {
  render() {
    return (
      <div id="singleRecipe" className="hidden">
        {this.props.recipes.map((recipe, i) =>
          <SingleRecipe key={i} name={recipe[0]} recipeId={i} ingridients={recipe[1]} visible={recipe[2]} shown={recipe[3]} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(SingleRecipes)
