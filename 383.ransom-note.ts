/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  let magazineChars = new Map<string, number>()

  // magazine counter
  for (const ch of magazine) {
    if (magazineChars.has(ch)) magazineChars.set(ch, magazineChars.get(ch)! + 1)
    else magazineChars.set(ch, 1)
  }

  // iterate ransomNote chars & reduce counter
  for (const ch of ransomNote) {
    if (magazineChars.get(ch)) {
      magazineChars.set(ch, magazineChars.get(ch)! - 1)
    } else return false
  }

  return true
}
// @lc code=end
