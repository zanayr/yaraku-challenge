export const desc = (arr, prop) => {
  return arr.slice().sort((a, b) => a[prop] < b[prop]);
}
export const asc = (arr, prop) => {
  return arr.slice().sort((a, b) => a[prop] > b[prop]);
}