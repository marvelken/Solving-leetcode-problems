// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

//   }

//   for (let j = 0; j < newArr.length; j++) {
//     if (!newArr.includes(newArr[j])) {
//       DisappearedArr.push(newArr[j]);
//     }
//   }


//my first solution using loop, it is sub-optimal
var findDisappearedNumbers = function(nums) {
  const DisappearedArr = [];

  for (let i = 1; i <= lengthOfArray; i++) {
    if (!nums.includes(i)) {
      DisappearedArr.push(i);
    }
  }
  return DisappearedArr;
};



//Second solution using Sets()

var findDisappearedNumbers = function(nums) {
  const numSet = new Set(nums);
  const disappeared = [];
  
  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      disappeared.push(i);
    }
  }
  
  return disappeared;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
