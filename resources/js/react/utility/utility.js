const desc = (arr, prop) => {
  return arr.slice().sort((a, b) => a[prop] < b[prop]);
}
const asc = (arr, prop) => {
  return arr.slice().sort((a, b) => a[prop] > b[prop]);
}

export const map = {
  0: desc,
  1: asc
}