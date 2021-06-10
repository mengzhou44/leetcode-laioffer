/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    lists = lists.filter(a => a !== null)
    if (lists.length === 0) return null

    let dummy = new ListNode(-1)
    let current = dummy
    let queue = []

    lists.forEach(item => addToQueue(item.val))

    while (lists.length > 0) {
        let val = queue.shift()
        let minIndex = 0
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].val === val) {
                minIndex = i
                break
            }
        }

        lists[minIndex] = lists[minIndex].next

        if (lists[minIndex] !== null) {
            addToQueue(lists[minIndex].val)
        }

        current.next = new ListNode(val)
        current = current.next
        lists = lists.filter(list => list !== null)

    }

    return dummy.next

    function addToQueue(val) {
        if (queue.length === 0) {
            queue.push(val)
        } else {
            let i
            for (i = queue.length - 1; i >= 0; i--) {
                if (queue[i] > val) {
                    queue[i + 1] = queue[i]
                } else {
                    break
                }
            }

            queue[i + 1] = val
        }
    }

};





function mergeKLists(lists) {
    if (lists.length === 0) return null

    if (lists.length === 1) return lists[0]

    while (lists.length > 1) {

        let merged = merge(lists.shift(), lists.shift())

        lists.push(merged)
    }

    return lists[0]

    function merge(node1, node2) {
        let dummy = new ListNode(-1)
        let cur = dummy
        while (node1 !== null && node2 !== null) {
            if (node1.val < node2.val) {
                cur.next = new ListNode(node1.val)
                node1 = node1.next

            } else {
                cur.next = new ListNode(node2.val)
                node2 = node2.next
            }

            cur = cur.next
        }

        if (node1 !== null) {
            cur.next = node1
        } else {
            cur.next = node2
        }

        return dummy.next
    }
}