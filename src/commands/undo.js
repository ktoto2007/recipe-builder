const undo = (history) => {
  if (history.length === 0) {
    return null
  }
  return [...history].pop()
}

export default undo