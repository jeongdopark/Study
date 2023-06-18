// 얕은 복사란 주소 값을 복사하기 때문에 참조하고 있는 실제 값이 같다.
// 깊은 복사란 독립적인 새로운 메모리 공간에 복사한다. 참조를 공유하지 않는다.

let copy_test = 1;

let shallow_test = copy_test;

copy_test = 2;

console.log(copy_test);
console.log(shallow_test);
console.log(shallow_test === copy_test);
