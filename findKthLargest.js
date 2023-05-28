
function findKthLargest(nums, k) {
    const n = nums.length;
    let left = 0, right = n - 1;
    while (true) {
        const pivotIndex = partition(nums, left, right);
        if (pivotIndex === n - k) {
            return nums[pivotIndex];
        } else if (pivotIndex < n - k) {
            left = pivotIndex + 1;
        } else {
            right = pivotIndex - 1;
        }
    }
}
// 将arr分片
function partition(nums, left, right) {
    const pivot = nums[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}
