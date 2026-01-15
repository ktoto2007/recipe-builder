const merge = (recipe, csvList) => {
  const normalized = csvList.split(', ')
  return [...recipe, normalized].flat()
}

export default merge
