/**
 * Allows to get the value of a path in an object or undefined
 * in case the path does not exist. The path is passed in the
 * form of a string where each segments is separated with a dot.
 */
export default function path(obj, pathStr) {
  const segments = pathStr.split('.')
  let partial = obj

  for (const segment of segments) {
    const type = typeof partial
    if (type === 'function' || (type === 'object' && !!obj)) {
      partial = partial[segment]
    } else {
      partial = undefined
      break
    }
  }

  return partial
}
