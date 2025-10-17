// Move Zeroes

//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// let zeroArr = []

//     nums.forEach(num => {
//         if(num == 0){
//             zeroArr.push(num)
//         }
//     });
//   console.log(zeroArr)
//     // nums = nums.push(...zeroArr)

//   console.log(nums.push(...zeroArr))

var moveZeroes = function (nums) {

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count = count + 1;
      nums.splice(i, 1);
    }
  }

  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
console.log(nums)
 
};

console.log(moveZeroes([1, 0, 0]));
