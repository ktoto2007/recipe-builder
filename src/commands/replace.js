const replace = (recipe, oldVal, newVal) => {
  const indexOfOldVal = recipe.indexOf(oldVal)
  const result = []
  for (let i = 0; i < recipe.length; i += 1) {
    if (i === indexOfOldVal) {
      result.push(newVal)
    }
    else {
      result.push(recipe[i])
    }
  }
  return result
}

export default replace