# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## Description

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]
```

 

**Constraints:**

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## 题目

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。

**字母异位词** 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。

## 解题思路

这道题可以将每个字符串都排序，排序完成以后，相同 Anagrams 的字符串必然排序结果一样。把排序以后的字符串当做 key 存入到 map 中。遍历数组以后，就能得到一个 map，key 是排序以后的字符串，value 对应的是这个排序字符串以后的 Anagrams 字符串集合。最后再将这些 value 对应的字符串数组输出即可。
