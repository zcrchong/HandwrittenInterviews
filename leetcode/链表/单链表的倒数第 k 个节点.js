// 返回链表的倒数第 k 个节点
var findFromEnd = function(head, k) {
    // 双指针
    let i =  head, j = head
    for (let l = 0; l < k; l++) {
        j = j.next
    }
    while (i!== null && j !== null) {
        i = i.next
        j = j.next
    }
    return i
}
