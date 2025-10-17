var findDifference = function (nums1, nums2) {
  const answerOne = [];
  const answerTwo = [];

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      answerOne.push(nums2[i]);
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      answerTwo.push(nums1[i]);
    }
  }

  return [answerOne, answerTwo];
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
