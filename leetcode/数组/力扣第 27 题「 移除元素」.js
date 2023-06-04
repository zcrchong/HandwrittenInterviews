// 移除元素
var removeElement = function(nums, val) {
    let slow = 0 , fast = 0
    while (fast < nums.length){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};

console.log(removeElement([3, 2, 2, 3], 3) === 2, 'Test Case 1 Failed');
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) === 5, 'Test Case 2 Failed');
console.log(removeElement([1, 1, 1, 1, 1], 1) === 0, 'Test Case 3 Failed');
console.log(removeElement([1, 2, 3, 4, 5], 6) === 5, 'Test Case 4 Failed');
console.log('All test cases passed');
