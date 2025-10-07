// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

//solution
var thirdMax = function (nums) {
  const initialSet = new Set(nums);
  const newArr = [...initialSet];

  newArr.sort((a, b) => a - b);
  const maximumNumber = newArr[newArr.length -1];
  const thirdMaximumNumber = newArr[newArr.length -3];;

  if (newArr.length < 3) {
    return maximumNumber;
  }else{
    return thirdMaximumNumber;
  }
};

// test case:
console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]));
