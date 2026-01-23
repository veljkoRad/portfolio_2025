```
const arr = [1, 2, 3];
const newArr = [arr, 4];
console.log(newArr); // [[1, 2, 3], 4]
```

- That's why we use spread operator

```
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 4]
```