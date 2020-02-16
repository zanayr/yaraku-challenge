/*
 *  Utility.js
 *  This document contains several utility functions that are used throughout the appliaction
 */

const desc = (arr, prop) => {
  // Should return a sorted copy of an array in descending order
  return arr.slice().sort((a, b) => a[prop] < b[prop]);
}
const asc = (arr, prop) => {
  // Should return a sorted copy of an array in ascending order
  return arr.slice().sort((a, b) => a[prop] > b[prop]);
}

export const capitalize = value => {
  // Should return a string that has been converted to 'Capital Case'
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

//  The map object is used by the reducer.js document to map sorting with just an index value.
//  This is done to make state management of the sorting directio easier
export const map = {
  0: desc,
  1: asc
}