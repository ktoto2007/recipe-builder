const remove = (recipe, ingredient) => {
  const index = recipe.indexOf(ingredient)
  const result = []
  for (let i = 0; i < recipe.length; i += 1) {
    if (i !== index) {
      result.push(recipe[i])
    }
  }
  return result
}

export default remove