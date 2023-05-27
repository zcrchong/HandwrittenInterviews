// let arr = [
//     {id: 1, name: '部门1', pid: 0},
//     {id: 2, name: '部门2', pid: 1},
//     {id: 3, name: '部门3', pid: 1},
//     {id: 4, name: '部门4', pid: 3},
//     {id: 5, name: '部门5', pid: 4},
//     {id: 6, name: '部门6', pid: 0},
// ]

/**
 * 转换成：
 * {
 *     id: 1,
 *     name : '部门1',
 *     pid: 1,
 *     children: [
 *      { id: 2, name: '部门2', pid: 1 },
 *      { id: 3, name: '部门3', pid: 1 },
 *      ......
 *     ]
 * }
 */
function jsonToTree(arr){
    // 类型必须为数组
    if(!Array.isArray(arr)){
        return arr
    }
    // result为结果数组，map为一个映射数组
    let result = [] , map = []
    // 将node按其自身id都映射到map中
    arr.forEach((node) => {
        const { id } = node
        map[id] = node
    })
    arr.forEach((node) => {
        const {pid} = node
        // 父节点
        const parent = map[pid]
        if(parent){
            // 如果有父节点，则在该父节点中创建children属性，并将自身放到其父节点的children下
            (parent.children || (parent.children = [])).push(node)
        }
        // 如果没有父节点，则为祖节点，直接将node推入结果数组
        if(!parent){
            result.push(node)
        }
    })
    return result
}


// test
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
    {id: 6, name: '部门6', pid: 0},
]
let tree = jsonToTree(arr)

console.log(tree)
