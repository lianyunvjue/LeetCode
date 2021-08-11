# [6. ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/)

## Description

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

 

**Example 1:**

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

**Example 3:**

```
Input: s = "A", numRows = 1
Output: "A"
```

 

## 题目

将一个给定字符串 s 根据给定的行数 `numRows` ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"PAYPALISHIRING"` 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

```
string convert(string s, int numRows); 
```



## 解题思路

**方法一：按行排序**
思路

通过从左向右迭代字符串，我们可以轻松地确定字符位于 Z 字形图案中的哪一行。

算法

我们可以使用 `min(numRows,len(s))`个列表来表示 Z 字形图案中的非空行。

从左到右迭代 `s`，将每个字符添加到合适的行。可以使用当前行和当前方向这两个变量对合适的行进行跟踪。

只有当我们向上移动到最上面的行或向下移动到最下面的行时，当前方向才会发生改变。


**方法二：按行访问**
思路

按照与逐行读取 Z 字形图案相同的顺序访问字符串。

算法

首先访问 `行 0` 中的所有字符，接着访问 `行 1`，然后 `行 2`，依此类推...

对于所有整数 `k`，

- 行 0 中的字符位于索引 `k(2⋅numRows−2)` 处;
- 行 `numRows−1` 中的字符位于索引 `k(2⋅numRows−2)+numRows−1` 处;
- 内部的 行 `i` 中的字符位于索引 `k(2⋅numRows−2)+i` 以及`(k+1)(2⋅numRows−2)−i` 处;

