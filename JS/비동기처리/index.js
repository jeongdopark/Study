// callback 함수란 ?
// 정의 : 함수에 파라미터로 들어가는 함수
// 용도 : 순차적으로 실행하고 싶을 때 사용한다.
// ex ) settimeout, addEventListener 콜백함수 사용된다.

// const printNumber = (number, cb) => {
//   setTimeout(() => {
//     console.log(number);

//     if (cb) {
//       cb(number + 1);
//     }
//   }, 1000);
// };

// printNumber(1, (number) => {
//   printNumber(number, (number) => {
//     printNumber(number, (number) => {
//       console.log("end");
//     });
//   });
// });

// const printNumberPromise = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const increase = number + 1;
//       console.log(increase);
//       resolve(increase);
//     }, 1000);
//   });
// };

// printNumberPromise(0)
//   .then((n) => printNumberPromise(n))
//   .then((n) => printNumberPromise(n))
//   .then((n) => printNumberPromise(n));

// callback hell 콜백 지옥을 마주한다.
// 코드의 가독성이 떨어진다.
// ES6에 도입된 Promise 통해서 더 편리하게 비동기 처리가 가능하다.
// 비동기 처리에 사용되는 객체이다.

// const response = fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((_res) => console.log(_res));

// const PromiseTest = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello");
//   });
// });

// console.log(PromiseTest.then((res) => console.log(res)));

// const PromiseTest = new Promise((resolve, reject) => {
//   console.log("hello");
//   resolve("success ! ");
// });

// PromiseTest.then((res) => console.log(res));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1), 1000;
//   });
// })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json')
//   .catch(alert); // Error: 404

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

const test = () => {
  let result;
  wait().then((res) => console.log(res));
};

test();
