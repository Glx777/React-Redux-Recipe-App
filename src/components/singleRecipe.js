import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {showEditRecipeForm, hideEditRecipeForm, removeRecipe, confirmEdit} from '../actions/'

class SingleRecipe extends Component {
  closeAddRecipeForm() {
    document.getElementById("singleRecipe").classList.remove('visible')
  }
  render() {
    return (
      <div className="allRecipe hidden" id={this.props.recipeId}>
      {this.props.shown ?
        <div>
          <div className="upPart">
            <p>{this.props.name}</p>
            <div className="buttonsDiv">
              <div className="divForFlex">
                <button onClick={() => {
                  this.props.showEditRecipeForm(this.props.recipeId)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.removeRecipe(this.props.recipeId)
                }}>Remove</button>
              </div>
            </div>
          </div>
          <div className="ingridients">
            <h1>Ingridients:</h1>
            <pre>{this.props.ingridients}</pre>
          </div>
          {this.props.visible ?
          <div className="editForm">
            <p>Edit Title:</p>
            <input type="text" defaultValue={this.props.name} ref="recipeName" />
            <p>Edit Ingridients</p>
            <textarea id="editFormTextArea" ref="recipeIngridients">{this.props.ingridients}</textarea><br />
            <button onClick={() => {
              this.props.confirmEdit(this.props.recipeId, this.refs.recipeName.value, this.refs.recipeIngridients.value)
            }}>Save changes</button>
            <button onClick={() => {
              this.props.hideEditRecipeForm(this.props.recipeId)
            }}>Cancel changes</button>
          </div> :
            ''
          }
        </div> :
        ''
      }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({showEditRecipeForm, hideEditRecipeForm, removeRecipe, confirmEdit}, dispatch)

export default connect(() => {}, mapDispatchToProps)(SingleRecipe)
