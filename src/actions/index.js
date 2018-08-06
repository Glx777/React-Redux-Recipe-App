export const addRecipe = (recipeName, recipeIngridients) => ({
  type: 'ADD_RECIPE',
  name: recipeName,
  ingridients: recipeIngridients,
  visible: false,
  shown: false
})

export const confirmEdit = (recipeId, recipeName, recipeIngridients) => ({
  type: 'CONFIRM_EDIT',
  recipeId: recipeId,
  recipeName: recipeName,
  recipeIngridients: recipeIngridients
})

export const removeRecipe = recipeId => ({
  type: 'REMOVE_RECIPE',
  recipeId: recipeId
})

export const showEditRecipeForm = recipeId => ({
  type: 'SHOW_EDIT_RECIPE_FORM',
  recipeId: recipeId
})

export const hideEditRecipeForm = recipeId => ({
  type: 'HIDE_EDIT_RECIPE_FORM',
  recipeId: recipeId
})

export const clearState = () => ({
  type: 'CLEAR_STATE'
})

export const toggleState = () => ({
  type: 'TOGGLE_STATE'
})

export const showSingleRecipe = recipeId => ({
  type: 'SHOW_SINGLE_RECIPE',
  payload: recipeId
})

export const editFormToDefault = () => ({
  type: 'EDIT_FORM_TO_DEFAULT'
})
