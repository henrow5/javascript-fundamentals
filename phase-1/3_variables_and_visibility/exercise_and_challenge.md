## Exercise

1. In the `node` REPL, declare two variables — `a` with value 4 and `b` with value 6.
2. Using `console.log`, print the result of:
   - `a + b` (should print 10)
   - `a * b` (should print 24)

```javascript
const a = 4;
const b = 6;

console.log(a + b); // 10
console.log(a * b); // 24
```

## Challenge

Can you find the problem in the following program? Make the fix, so the code prints "Hello
Makers" when run into `node`.

```javascript
const greeting = 'Hello ';
const name = 'Makers';

console.log greeting + name;
```

Solution:

```javascript
const greeting = "Hello ";
const name = "Makers";

console.log(greeting + name);
```
