// Good Luck 💪🏾
function findLargestNumbers(arrays) {
    return arrays.map(subArray => Math.max(...subArray));
  }
  
  
  console.log(findLargestNumbers([[7, 3, 8, 11], [54, 12, 43, 77], [16, 11, 8]])); // [11, 77, 16]
  console.log(findLargestNumbers([[22, 55, 12], [45, 66, 95], [22, 5, 11]])); // [55, 95, 22]
  