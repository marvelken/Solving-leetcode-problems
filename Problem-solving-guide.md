## Problem-Solving Process (The Meta-Skill)
This matters MORE than knowing algorithms:
Step 1: Understand the Problem

Read it twice
Write out examples by hand
Ask: "What's the input? What's the output?"

Step 2: Think Before Coding

Don't jump straight to code!
Walk through an example manually
Identify the pattern (two pointers? hash map?)

Step 3: Start Simple

Brute force first (even if slow)
Get SOMETHING working
Then optimize

Step 4: Test Your Logic

Use console.log() everywhere
Test with small examples
Check edge cases: empty array, single element, duplicates

Step 5: Debug Systematically

If it doesn't work, don't guess randomly
Print intermediate values
Walk through step-by-step


4. Time & Space Complexity Basics
You need to know what "efficient" means:
Time Complexity (How many operations?)

O(1) - Constant: arr[0]
O(n) - Linear: Loop through array once
O(n²) - Quadratic: Nested loops
O(log n) - Logarithmic: Binary search

Rule of thumb:

O(n) is usually good
O(n²) is usually bad for large inputs
O(1) is ideal

Space Complexity (How much extra memory?)

O(1) - No extra space (in-place)
O(n) - Extra array/object of size n