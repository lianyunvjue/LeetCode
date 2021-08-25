# [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

## Description

Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)

```
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

 

## 题目

给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。

## 解题思路

- 给出一个二维数组，按照螺旋的方式输出
- 解法一：需要注意的是特殊情况，比如二维数组退化成一维或者一列或者一个元素。注意了这些情况，基本就可以一次通过了。
- 解法二：提前算出一共多少个元素，一圈一圈地遍历矩阵，停止条件就是遍历了所有元素（count == sum）

