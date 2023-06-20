/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  /**
   * DFS
   * Time Complexity: O(n)
   * Space Complexity: O(n) *If the tree is balanced, it'd be O(logN)
   */
  let diameter = 0
  dfs(root)
  return diameter

  function dfs(node) {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    diameter = Math.max(diameter, left + right)

    return 1 + Math.max(left, right)
  }
}
// @lc code=end
