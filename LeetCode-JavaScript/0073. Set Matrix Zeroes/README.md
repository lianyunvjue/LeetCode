# [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)

## Description

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s, and return *the matrix*.

You must do it [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg)

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg)

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

 

**Constraints:**

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-231 <= matrix[i][j] <= 231 - 1`

 **Follow up:**

- A straightforward solution using `O(mn)` space is probably a bad idea.
- A simple improvement uses `O(m + n)` space, but still not the best solution.
- Could you devise a constant space solution?

## 题目

给定一个 `m x n` 的矩阵，如果一个元素为 `0` ，则将其所在行和列的所有元素都设为 `0` 。请使用 `原地` 算法。

进阶：

一个直观的解决方案是使用  `O(mn)` 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 `O(m + n)` 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？

## 解题思路

- 此题考查对程序的控制能力，无算法思想。题目要求采用原地的算法，所有修改即在原二维数组上进行。在二维数组中有 2 个特殊位置，一个是第一行，一个是第一列。它们的特殊性在于，它们之间只要有一个 0，它们都会变为全 0 。先用 2 个变量记录这一行和这一列中是否有 0，防止之后的修改覆盖了这 2 个地方。然后除去这一行和这一列以外的部分判断是否有 0，如果有 0，将它们所在的行第一个元素标记为 0，所在列的第一个元素标记为 0 。最后通过标记，将对应的行列置 0 即可。
