## Exercise

A colleague just asked you some help to debug their code.

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
};
```

When calling this function, something doesn't work as expected. What fix can you suggest
to solve the problem?

You'll know the function works if you manage to have the expected output when running in
`node`:

```javascript
> isValidLength('00');
false

> isValidLength('00112233445');
true
```

Solution:

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
};
```
