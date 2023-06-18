/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head, prev = null) {
  if (head === null) return prev // base case
  let next = head.next
  head.next = prev
  prev = head
  return reverseList(next, prev)
}
// var reverseList = function (head) {
//   /**
//    * Iteration(ES6)
//    */
//   let [prev, curr] = [null, head]
//   while (curr) {
//     ;[curr.next, curr, prev] = [prev, curr.next, curr]
//   }
//   return prev
//   /**
//    * Iteration
//    */
//   // let prev = null
//   // let curr = head // start from 1
//   // let next = null // will be override
//   // while (curr !== null) {
//   //   // reserve next value
//   //   next = curr.next // next = null
//   //   // reverse
//   //   curr.next = prev // prev= 4
//   //   // prep for next round
//   //   prev = curr // prev = 5
//   //   curr = next // curr = null
//   // }
//   // return prev
// }
// @lc code=end
