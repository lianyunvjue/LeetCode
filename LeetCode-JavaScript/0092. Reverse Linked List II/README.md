# [92. Reverse Linked List II](https://leetcode.com/problems/climbing-stairs/)

## Description

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return *the reversed list*.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg)

```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

**Example 2:**

```
Input: head = [5], left = 1, right = 1
Output: [5]
```

 

**Constraints:**

- The number of nodes in the list is `n`.
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

 

**Follow up:** Could you do it in one pass?

## 题目

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

## 解题思路

由于有可能整个链表都被反转，所以构造一个新的头结点指向当前的头。之后的处理方法是：找到第一个需要反转的结点的前一个结点 p，从这个结点开始，依次把后面的结点用“头插”法，插入到 p 结点的后面。循环次数用 `n-m` 来控制。

这一题结点可以原地变化，更改各个结点的 next 指针就可以。不需要游标 p 指针。因为每次逆序以后，原有结点的相对位置就发生了变化，相当于游标指针已经移动了，所以不需要再有游标 `p = p.Next` 的操作了。
