<h2><a href="https://leetcode.com/problems/add-two-numbers">2. Add Two Numbers</a></h2><h3>Medium</h3><hr><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>

---
### Retrospective Notes
#### Attempt 1: Decimal Conversion (Failed)
**Idea** Convert LinkedList → decimal number → add → convert back to LinkedList   
**Problem** JavaScript's `number` type uses IEEE 754 double precision, which has a limited range for safely representing integers
```javascript
    Number.MAX_SAFE_INTEGER = 9007199254740991 (2^53 - 1, ~16 digits)
```
The constraints allow list lengths up to 100, so the number of digits can far exceed this safe range. As a result:
1. Precision loss occurs
2. Beyond a certain size, JS switches to exponential notation like `1e+10`
3. Any further computation or string conversion on this value corrupts the digit information

**Conclusion** The decimal conversion approach fundamentally conflicts with this problem's constraints (long lists). → Instead of converting to a number, the LinkedList structure should be traversed digit-by-digit directly.

#### Attempt 2: Iterative Approach (Success)
Implemented with a while loop + dummy head pattern instead of recursion.

**Key Points:**
- `dummy` is an empty placeholder node used to start the traversal (its `val`: 0 is not part of the actual result)
- `carry !== 0` is included in the while condition because a carry can remain even after both lists end (e.g. 5+5=10)
- When `l1` or `l2` is null, its value is treated as 0 — this naturally handles lists of different lengths

### Questions & Answers
1. Why return `dummy.next` instead of `dummy`?   
`dummy` is just an empty placeholder node initialized with `val = 0` — it's not part of the actual result. Returning `dummy` itself would prepend an unwanted `0` to the front of the result list.   
Example: `2->4->3` + `5->6->4` should equal `7->0->8`
   - Returning `dummy`: `0->7->0->8` (wrong)
   - Returning `dummy.next`: `7->0->8` (correct)   
The reason for using a dummy node in the first place is that it lets the loop logic stay uniform — there's no need to special-case "creating the first node" versus "appending subsequent nodes." This is a common idiom in LinkedList problems.
2. If `let current = dummy`, does `dummy` also change when we do `current = current.next`?   
No. Two different operations need to be distinguished here.
   1. `dummy` and `current` are two seperate variables pointing to the same object — like two name tags attached to the same box.
    ```
    dummy   ──┐
              ├──> [ListNode { val: 0, next: null }]
    current ──┘
    ```
    2. The variable `current` itself is reassigned to point to a different object (the next node). `dummy` is reassigned to point a different object (the next node). `dummy` is completely unaffected — it still points to the same original node (the first one).
   ```
    dummy ──> [Node A: val=0] ──next──> [Node B: val=7]
                                            ↑
    current ────────────────────────────────┘  (points somewhere different from dummy now)
    ```
    3. `current.next = new ListNode(sum % 10)` doesn't reassign a variable — it mutates a property of the pointing to the same object at that moment, chaning that object's property is visible through `dummy.next` as well (because they're looking at the same box).

### Complexity
- Time: O(max(m, n))
- Space: O(1) excluding the result list, with no call stack usage unlike the recursive version
