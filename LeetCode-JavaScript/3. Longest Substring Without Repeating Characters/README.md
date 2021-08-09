# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Description

Given a string `s`, find the length of the **longest substring** without repeating characters.

 

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Example 4:**

```
Input: s = ""
Output: 0
```

## 题目

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

## 解题思路

这一题和第 438 题，第 3 题，第 76 题，第 567 题类似，用的思想都是`sliding window`"滑动窗口"。

滑动窗口的右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。一旦出现了重复字符，就需要缩小左边界，直到重复的字符移出了左边界，然后继续移动滑动窗口的右边界。以此类推，每次移动需要计算当前长度，并判断是否需要更新最大长度，最终最大的值就是题目中的所求。

------



1. 创建一个set

2. 两个指针:

   第一个指针指向字符串的开头 - j

   第二个指针随着for循环遍历字符串 - i

3. 如果set里面没有`s[i]`,说明目前为止还没有重复的字符串,把`s[i]`添加到set里,然后更新最大不重复字符的数量

4. 如果set里有`s[i]`，则从set里删除`s[i]`,并且递增j, 再检查set里是否有s[i], 如此反复直到set里没有`s[i]`为止

5. 重复步骤3和4, 直到遍历完整个字符串

