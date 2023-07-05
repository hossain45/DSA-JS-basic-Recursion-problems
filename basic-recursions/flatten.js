/*
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.
*/
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
function flatten(arr) {
  let flattenArr = [];

  if (arr.length === 0) {
    return flattenArr;
  }
  if (Array.isArray(arr[0])) {
    flattenArr = flattenArr.concat(flatten(arr[0]));
  } else {
    flattenArr.push(arr[0]);
  }
  return flattenArr.concat(flatten(arr.slice(1)));
}