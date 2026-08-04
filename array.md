# JavaScript Arrays Assignment  

## Instructions  
- Use only `var` to declare variables (`let` and `const` are not allowed).  
- Write clean and readable code.  
- Test your code in the browser console or Node.js before submitting.  

---

## Questions  

### Question 1 (Basic - Pop & Push)  
**Task:**  
Create an array named `fruits` with the values: `["apple", "banana", "orange"]`.  

1. Remove the last fruit using `pop()` and store it in a variable `lastFruit`.  
2. Add `"grape"` and `"mango"` to the end of the array using `push()`.  
3. Print the final array and the removed fruit.  

---

### Question 2 (Basic - Shift & Unshift)  
**Task:**  
Create an array named `colors` with: `["red", "blue", "green"]`.  

1. Remove the first color using `shift()` and store it in `firstColor`.  
2. Add `"yellow"` and `"purple"` to the beginning using `unshift()`.  
3. Print the updated array and the removed color.  

---

### Question 3 (Intermediate - Find)  
**Task:**  
Create an array `numbers` = `[10, 20, 30, 40, 50]`.  

1. Use `find()` to get the first number greater than 25. Store it in `foundNumber`.  
2. Print the result. If no number is found, print `"No number found"`.  

---

### Question 4 (Intermediate - IndexOf)  
**Task:**  
Create an array `animals` = `["cat", "dog", "elephant", "dog", "fox"]`.  

1. Find the index of `"dog"` using `indexOf()`.  
2. Find the last index of `"dog"` using `lastIndexOf()`.  
3. Print both indices.  

---

### Question 5 (Intermediate - Slice)  
**Task:**  
Create an array `letters` = `["a", "b", "c", "d", "e", "f"]`.  

1. Use `slice()` to extract elements from index 1 to 4 (excluding 4). Store in `slicedLetters`.  
2. Use `slice()` to extract elements from index 2 to the end. Store in `slicedFrom2`.  
3. Print both new arrays.  

---

### Question 6 (Advanced - Splice)  
**Task:**  
Create an array `vegetables` = `["carrot", "broccoli", "spinach", "potato"]`.  

1. Use `splice()` to remove `"broccoli"` and `"spinach"` (2 elements starting at index 1).  
2. Insert `"cucumber"` and `"pepper"` at the same position (index 1) using `splice()`.  
3. Print the final array.  

---

### Question 7 (Combination Challenge)  
**Task:**  
Create an array `scores` = `[15, 25, 35, 45, 55]`.  

1. Remove the first score using `shift()` and store it.  
2. Add `10` and `20` to the beginning using `unshift()`.  
3. Remove the last score using `pop()` and store it.  
4. Add `60` and `70` to the end using `push()`.  
5. Use `find()` to get the first score greater than 50.  
6. Print the final array and all removed values.  

---

### Question 8 (Real-World Scenario)  
**Task:**  
Create an array `cart` = `["laptop", "mouse", "keyboard", "monitor"]`.  

1. A customer returns `"mouse"`. Remove it using `splice()` (find its index first).  
2. Add `"headphones"` and `"speaker"` at the end using `push()`.  
3. The first item in the cart is out of stock. Remove it using `shift()` and store it in `removedItem`.  
4. Print the final cart, the removed item, and the index of `"keyboard"`.  

---

### Question 9 (Bug Fixing)  
**Task:**  
The following code has errors. Fix it and explain what it does:  

```javascript
var data = [1, 2, 3, 4, 5];
var removed = data.pop();
var added = data.unshift(0);
var sliced = data.slice(1, 3);
var found = data.find(function(num) {
  return num > 3;
});
console.log(removed, added, sliced, found);