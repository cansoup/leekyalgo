<h2><a href="https://leetcode.com/problems/zigzag-conversion">6. Zigzag Conversion</a></h2><h3>Medium</h3><hr><p>The string <code>&quot;PAYPALISHIRING&quot;</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>

<pre>
P   A   H   N
A P L S I I G
Y   I   R
</pre>

<p>And then read line by line: <code>&quot;PAHNAPLSIIGYIR&quot;</code></p>

<p>Write the code that will take a string and make this conversion given a number of rows:</p>

<pre>
string convert(string s, int numRows);
</pre>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 3
<strong>Output:</strong> &quot;PAHNAPLSIIGYIR&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 4
<strong>Output:</strong> &quot;PINALSIGYAHRPI&quot;
<strong>Explanation:</strong>
P     I    N
A   L S  I G
Y A   H R
P     I
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;A&quot;, numRows = 1
<strong>Output:</strong> &quot;A&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of English letters (lower-case and upper-case), <code>&#39;,&#39;</code> and <code>&#39;.&#39;</code>.</li>
	<li><code>1 &lt;= numRows &lt;= 1000</code></li>
</ul>
---
### Retrospective Notes
#### Attempt 1: Making Two-Dimensional Array (Failed)
**Idea** Declare two-dimensional array and fill it up.    
**Problem** My first idea was to declare a 2D array and place each character directly into its correct `[row][col]` positoin. However, this approach breaks down with a standard `for` loop, because a `for` loop needs a consistent direction of index traversal — either strictly increasing or strictly decreasing. In a zigzag pattern, though, the row index moves down for some columns and then up for others (e.g., filling column 2 top-to-bottom, but the "diagonal" characters in between need to be filled bottom-to-up within the same column-ish range). That back-and-forth direction change doesn't fit naturally into a single loop with one direction, which made the indexing logic messy.

**Conclusion** Instead of filling a 2D array directly, I split the string into chucks of size `2 * numRows - 2`, since this is the length of one full zigzag cycle (one full down-stroke followed by one full up-stroke). Each chunk was then divided into two parts — the first `numRows` characters representing the downward segment, and the rest representing the diagonal/upward segment, which I reversed and padded with a placeholder(`"*"`) so both segments could be indexed consistently by row. Finally, reading through the array column by column (row index outer, chunk index inner) reconstructed the zigzag order, and stripping out the placehoolder characters at the end produced the correct result. 
