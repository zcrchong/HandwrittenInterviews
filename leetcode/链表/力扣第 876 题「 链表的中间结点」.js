// 链表的中间结点
function middle(head){
    let l = head , r = head
    while (r !== null && r.next !== null) {
        l = l.next
        r = r.next
    }
    return r
}
