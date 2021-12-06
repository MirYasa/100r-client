//filter obj for needed fields
export const filter = (startObject, allowedObject) => {
  return Object.keys(startObject)
    .filter(key => Object.keys(allowedObject).includes(key))
    .reduce((obj, key) => {
      obj[key] = startObject[key]
      return obj
    }, {})
}