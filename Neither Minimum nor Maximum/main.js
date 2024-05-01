function neitherMinNorMax() {
  nums1 = [11, 23, 56, 78];
  nums = nums1.sort((a, b) => {
    return a - b;
  });
  if (nums.length <= 2) {
    console.log(-1);
  } else {
    console.log(nums[1]);
  }
}
