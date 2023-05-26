// 比较版本号大小
/*
* 比较版本号大小的算法可以按照以下步骤进行：

将版本号按照.分割成数组，例如1.2.3分割成[1, 2, 3]。

从左到右逐级比较每个部分的大小，如果某个部分的值大于另一个版本号的对应部分的值，则认为这个版本号比另一个版本号大，否则认为这个版本号比另一个版本号小。

如果两个版本号的所有部分都相同，则认为它们相等。

以下是一个简单的实现：
* */
function compareVersion(Version1,Version2){
    let v1 = Version1.split('.')
    let v2 = Version2.split('.')
    let maxLen = Math.max(v1.length , v2.length)
    for (let i = 0; i < maxLen; i++) {
        let childV1 = parseInt(v1[i] || 0)
        let childV2 = parseInt(v2[i] || 0)
        if(childV1 > childV2){
            return true
        } else if(childV1 < childV2){
            return false
        }
    }
    return 0
}
console.log(compareVersion('1.0.0', '1.0.1')); // 输出-1
console.log(compareVersion('1.2.3', '1.2.3')); // 输出0
console.log(compareVersion('2.0', '1.9.9')); // 输出1
console.log(compareVersion('1.0.0', '1')); // 输出0
