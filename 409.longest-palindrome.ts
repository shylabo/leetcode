/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
  // pattern of num of char
  // odd: should be centered : xxAAAxx, xxAxx => one biggest num of odd
  // even: AAAAxxx....xxxAAAA => sum up all the even nums and divide by 2

  const charMap = new Map<string, number>()
  for (const ch of s) {
    if (charMap.has(ch)) charMap.set(ch, charMap.get(ch)! + 1)
    else charMap.set(ch, 1)
  }
  // {
  //   a: 1,
  //   b: 1,
  //   c: 4,
  //   d: 2
  // }

  let maxOddNum = 0
  let result = 0
  for (const key in charMap) {
    if (charMap.get(key)! % 2 !== 0) {
      // odd case
      if (charMap.get(key)! > maxOddNum) maxOddNum = charMap.get(key)!
    } else {
      // even case
      result += charMap.get(key)! / 2
    }
  }

  return result + maxOddNum
}
// @lc code=end
