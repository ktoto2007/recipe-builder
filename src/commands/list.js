const list = (recipe) => {
  const result = []
  for (let i = 0; i < recipe.length; i += 1) {
    result.push(`${i + 1}. ${recipe[i]}`)
  }
  return result
}

export default list