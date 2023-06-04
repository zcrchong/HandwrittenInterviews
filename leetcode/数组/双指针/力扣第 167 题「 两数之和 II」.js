// 两数之和：双指针从两边往中间靠近
var twoSum = function(nums, target) {
    var left = 0 , right = nums.length - 1
    while (left < right){
        if(nums[left] + nums[right] === target){
            return [left+1 , right+1]
        } else if(nums[left] + nums[right] < target){
            left++
        } else {
            right--
        }
    }
    return [-1,-1]
}

// 测试用例1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // 输出：[1, 2]

// 测试用例2
const nums2 = [1, 3, 4, 6, 9];
const target2 = 10;
console.log(twoSum(nums2, target2)); // 输出：[2, 5]

// 测试用例3
const nums3 = [1, 2, 3, 4, 5];
const target3 = 8;
console.log(twoSum(nums3, target3)); // 输出：[3, 5]

// 测试用例4
const nums4 = [1, 2, 3, 4, 5];
const target4 = 10;
console.log(twoSum(nums4, target4)); // 输出：[-1, -1]
