// 可以使用双指针算法来解决合并两个升序数组的问题，具体步骤如下：
// 1.定义两个指针i和j，分别指向两个数组的起始位置。
// 2.创建一个新的空数组result，用于存储合并后的结果。
// 3.比较两个指针所指向的元素的大小，将较小的元素添加到result数组中，并将对应的指针向后移动一位。
// 4.重复步骤3，直到其中一个数组的所有元素都被添加到result数组中。
// 5.将另一个数组中剩余的元素添加到result数组中。
// 6.返回result数组作为合并后的结果。
// 下面是使用JavaScript实现合并两个升序数组的代码：
function mergeSortedArrays(arr1, arr2) {
    // 合并两个有序数组
    let i = 0,j = 0
    let result = []
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

// 测试用例1
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // 输出: [1, 2, 3, 4, 5, 6, 7, 8]

// 测试用例2//
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
console.log(mergeSortedArrays(arr3, arr4)); // 输出: [1, 2, 3, 4, 5, 6]

// 测试用例3
const arr5 = [1, 4, 7];
const arr6 = [2, 3, 5, 6, 8];
console.log(mergeSortedArrays(arr5, arr6)); // 输出: [1, 2, 3, 4, 5, 6, 7, 8]
