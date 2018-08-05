import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addRecipe} from '../actions/'

class AddRecipeForm extends Component {
  render() {
    return (
      <div id="addRecipeForm" className="hidden">
        <input type="text" ref="recipeName" placeholder="Recipe name" /><br />
        <textarea rows="5" ref="ingridients" placeholder="Ingridients"></textarea><br />
        <button onClick={() => {
          if (this.refs.recipeName.value !== '' && this.refs.ingridients.value !== '') {
            this.props.addRecipe(this.refs.recipeName.value, this.refs.ingridients.value, false, false)
            this.refs.recipeName.value = ''
            this.refs.ingridients.value = ''
            document.getElementById("addRecipeForm").classList.remove('visible')
          } else {
            alert('All fields are required to proceed')
          }
        }}>Add recipe</button><br />
        <button onClick={() => {
          this.refs.recipeName.value = ''
          this.refs.ingridients.value = ''
          document.getElementById("addRecipeForm").classList.remove('visible')
        }}>Cancel</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addRecipe}, dispatch)
}

export default connect(() => {}, mapDispatchToProps)(AddRecipeForm)
