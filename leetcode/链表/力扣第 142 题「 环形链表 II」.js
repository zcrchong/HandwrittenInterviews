var detectCycle = function(head) {
    let slow = head , fast = head
    while (fast !== null && fast.next !== null){
        slow  = slow.next
        fast = fast.next.next
        if(slow === fast){
            break
        }
    }
    slow = head
    while (slow !== fast){
        slow = slow.next
        fast = fast.next
    }
    return slow
}
