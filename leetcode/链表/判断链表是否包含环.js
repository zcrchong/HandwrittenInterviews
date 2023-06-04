function hasCycle(head) {
    // 判断链表是否有环
    let slow = head , fast = head
    while (fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}
