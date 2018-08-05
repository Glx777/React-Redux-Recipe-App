import React, {Component} from 'react'
import {connect} from 'react-redux'
import Recipe from './recipe'

class Recipes extends Component {
  render() {
    return (
      <div id="recipes">
        {this.props.recipes.map((recipe, i) =>
          <Recipe key={i} name={recipe[0]} recipeId={i} ingridients={recipe[1]} visible={recipe[2]} shown={recipe[3]} />
        )}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(Recipes)
