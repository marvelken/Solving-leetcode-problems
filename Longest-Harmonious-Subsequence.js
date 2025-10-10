// Longest Harmonious Subsequence

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// Input: nums = [1,1,1,1]

// Output: 0

// Explanation:

// No harmonic subsequence exists.

var findLHS = function (nums) {
  const newArr = [];
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    //When the bigger number appears before the smaller number in the array it is: MaxMin. else when the smaller number apears before the bigger number in the array it is: minMax
    console.log(nums[i], nums[i + 1]);
    const maxMinDifference = nums[i] - nums[i + 1] === 1 || 0;
    const minMaxDifference = nums[i + 1] - nums[i] === 1 || 0;
    const lastValueDifference =
      nums[nums.length - 1] - nums[nums.length - 2] === 1;

    if (maxMinDifference || minMaxDifference ) {
      newArr.push(nums[i], nums[i + 1]);
      count++
      break;
    }
  }

  return newArr.length;
};
findLHS([1, 2, 3, 4]);

// Solution
//


