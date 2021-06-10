/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head == null) return null
    let map = new Map()
    let dummy = new Node(-1)
    let cloned = dummy
    let cur = head
    while (cur !== null) {
        cloned.next = new Node(cur.val)
        cloned = cloned.next
        map.set(cur, cloned)
        cur = cur.next
    }

    cur = head
    while (cur !== null) {
        let cloned = map.get(cur)
        cloned.random = map.get(cur.random)
        cur = cur.next
    }

    return dummy.next

};