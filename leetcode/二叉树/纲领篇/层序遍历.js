// 层序遍历函数
function levelOrder(root) {
    if(root === null) return []
    const res = []
    const queue = [root]
    while (queue.length){
        const level = []
        for (let i = 0; i < queue.length; i++) {
            const node = queue.shift()
            level.push(queue)
            if(node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(level)
    }
    return res
}
