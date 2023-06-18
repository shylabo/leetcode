/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // find center
  let slow = head
  let fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // now slow.next is the center

  // reverse second half
  let curr = slow.next
  let prev = null
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  // now prev is the start of second half

  let l1 = head
  let l2 = prev
  let next = null
  while (l2.next) {
    next = l1.next
    l1.next = l2
    l1 = next

    next = l2.next
    l2.next = l1
    l2 = next
  }
}
// @lc code=end
