var removeDuplicates = function(nums) {
    let i = 0 , j = 0
    if(nums.length === 0) return 0
    while (j < nums.length){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
        j++
    }
    return i+1
};
console.log(removeDuplicates([1, 1, 2])) // 输出：2，nums变为[1, 2, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 输出：5，nums变为[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
console.log(removeDuplicates([])) // 输出：0，nums变为[]
console.log(removeDuplicates([1, 2, 3, 4])) // 输出：4，nums变为[1, 2, 3, 4]
