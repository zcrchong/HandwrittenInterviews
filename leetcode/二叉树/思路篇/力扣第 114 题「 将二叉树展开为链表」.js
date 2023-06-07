var flatten = function(root) {
    // function code here
    if(root === null){
        return null
    }
    flatten(root.left)
    flatten(root.right)
    // 后序遍历
    // 1. 定义left和right记录下左右节点
    var left = root.left
    var right = root.right
    // 2. 另左节点变为null，左节点接到右节点位置上
    root.left = null
    root.right = left
    // 3. 将原先右节点的内容接入到右节点的末端
    var p = root
    while (root.right !== null){
        p = p.right
    }
    p.right = right
};
