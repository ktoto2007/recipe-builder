const unique = (recipe) => {
  const result = []
  for (const el of recipe) {
    if (!result.includes(el)) {
      result.push(el)
    }
  }
  return result
}

export default unique