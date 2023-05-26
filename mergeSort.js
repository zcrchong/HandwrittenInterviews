// 归并思想经典例题：如何用js将俩个无序数组合并成有序数据,不能用sort
// 可以使用归并排序的思想来实现将两个无序数组合并成有序数组的操作，具体步骤如下：
// 定义一个新数组，用于存储合并后的有序数组。
// 定义两个指针，分别指向两个无序数组的起始位置。
// 比较两个指针所指向的元素，将较小的元素添加到新数组中，并将指针向后移动一位。
// 重复步骤3，直到其中一个数组的元素全部添加到新数组中。
// 将另一个数组的剩余元素添加到新数组中。
// 下面是使用JavaScript实现的代码：
// javascript

function mergeArr(arr1,arr2){
    let i = 0 , j = 0 , res = []
    arr1 = arr1.sort((a,b) => a-b)
    arr2 = arr2.sort((a,b) => a-b)
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j] ){
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }

    }
    while (i < arr1.length){
        res.push(arr1[i])
        i++
    }
    while (j < arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}
// 示例
let arr1 = [3, 5, 2, 8, 6];
let arr2 = [4, 1, 7, 9];
let result = mergeArr(arr1, arr2);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
