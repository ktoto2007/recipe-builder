const sortRecipe = (recipe, direction) => {
  if (direction === 'asc') {
    return recipe.toSorted()
  }
  else {
    return recipe.toSorted().reverse()
  }
}

export default sortRecipe
