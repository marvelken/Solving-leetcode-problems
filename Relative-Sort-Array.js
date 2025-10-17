// Relative Sort Array.js

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
// Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

var relativeSortArray = function (arr1, arr2) {
  // htis arryay is to be sorted, at the ned of the day
  let uniqueArray = [];
  let notUniqueArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      uniqueArray.push(arr1[i]);
    }
  }

  console.log(notUniqueArray);
  console.log(uniqueArray);
};

// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));

var SortArray = function (arr1, arr2) {
  let count = {};
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!count[arr1[i]]) {
      count[arr1[i]] = 1;
    } else {
      count[arr1[i]] = count[arr1[i]] + 1;
    }
  }


  for (let i = 0; i < arr2.length; i++) {
    if (count[arr2[i]]) {
      for (let j = 0; j < count[arr2[i]]; j++) {
        newArr.push(arr2[i]);
      }
    }
  }

  const uniqueARR = []
  

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      uniqueARR.push(arr1[i]);
    }
  }

  uniqueARR.sort((a, b) => a - b);
  newArr.push(...uniqueARR)

  return newArr;
};

console.log(SortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));

//if nums 2 includes nums 1, I want o have the same number of occurence of elements in in nums two, and I want to have the numbers that are not unique at the back of nums
