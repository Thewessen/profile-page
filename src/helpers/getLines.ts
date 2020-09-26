export default (code, from, to = null) => {
  if (to === null) {
    to = from + 1
  }
  return code
    .split('\n')
    .slice(from, to)
    .join('\n')
}
