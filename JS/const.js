// const에 대한 의문

// const test = 1;
// test = 2;

// TypeError: Assignment to constant variable.

const test1 = Array.from({ length: 3 }, (e, i) => i + 1); // [1, 2, 3]
test1[1] = 1;
test1[2] = 1;
console.log(test1);
