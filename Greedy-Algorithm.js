// 贪心算法例题：腾讯云智面试题
// 一个数组,分成3个数组，三个数组里的number之和相近，这个算法应该如何实现
// 这个问题可以使用贪心算法来解决。具体实现步骤如下：
//
// 首先将原数组按照从大到小的顺序排序，以便后续分配时能够优先选择大的数。
//
// 创建三个空数组，分别表示三个子数组。
//
// 遍历原数组，将每个数依次加入三个子数组中，每次加入时选择当前三个子数组中和最小的那个，以保证三个子数组的和相近。
//
// 重复步骤3，直到原数组中的所有数都被分配到三个子数组中。
//
// 以下是使用JavaScript实现的代码示例：
function splitArr(arr){
    // 将原数组按照从大到小的顺序进行排序
    arr.sort((a,b) => b - a)
    let arr1 = [] , arr2 = [] , arr3 = []
    let sum1 = 0 , sum2 = 0 , sum3 = 0
    for (let i = 0; i < arr.length; i++) {
        if(sum1 <= sum2 && sum1 <= sum3){
            arr1.push(arr[i])
            sum1 += arr[i]
        } else if(sum2 <= sum1 && sum2 <= sum3){
            arr2.push(arr[i])
            sum2 += arr[i]
        } else {
            arr3.push(arr[i])
            sum3 += arr[i]
        }
    }
    return [arr1,arr2,arr3]
}
