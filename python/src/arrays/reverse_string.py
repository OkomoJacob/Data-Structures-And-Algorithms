"""
Reverse a string ([LeetCode 344](https://leetcode.com/problems/reverse-string/)).

Given a string, like a sentence, it should reverse the individual characters.

Example 1:
Input: s = 'Hi My name is Jacob'
Output: 'bocaJ si eman yM iH' 
"""

from typing import List

class Solution:
    def reverseStringIterative(self, s: List[str]) -> None:
        """
        Reverses the input string list in-place.

        Args:
        s (List[str]): The list of characters to be reversed.

        Time complexity: O(n)
        Space complexity: O(1)
        """
        left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
