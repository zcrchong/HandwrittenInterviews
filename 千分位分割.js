/**
 * 千分位分割
 * 1100001 => 1,100,001
 */
// 思路：将数字转为字符串再转为数组，将数组颠倒，每隔三位添加一个逗号，之后再把处理好的数组颠倒回来，转为字符串return
function sliceNum(num){
    let strArr = num.toString().split('')
    let reverseStr = strArr.reverse()
    let res = ''
    for (let i = 0; i < reverseStr.length; i++) {
        if(i % 3 === 0 && i !== 0){
            res = res + ','
        }
        res = res + reverseStr[i]
    }
    return res.split('').reverse().join('')
}

console.log(sliceNum(1100001))
