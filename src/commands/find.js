const find = (recipe, substring) => {
  const result = []
  for (const el of recipe) {
    if (el.toLowerCase().includes(substring.toLowerCase())) {
      result.push(el)
    }
  }
  return result
}

export default find