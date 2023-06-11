// callback 함수란 ?
// 정의 : 함수에 파라미터로 들어가는 함수
// 용도 : 순차적으로 실행하고 싶을 때 사용한다.
// ex ) settimeout, addEventListener 콜백함수 사용된다.

// --------------- //
// Promise JS에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 object

// 1. state
// 2. producer, consumer

// promise가 만들어지면 바로 실행.
// producer
const promise = new Promise((resolve, reject) => {
  // resolve([1, 2, 3]);
  reject(new Error("error!!"));
});

// consumers : then, catch, finally
// then : promise가 정상적으로 잘 수행이 되면, resolve 콜백함수에 전달된
// 파라미터를 전달받는다.
//
promise
  .then((e) => console.log(e))
  .catch((error) => {
    console.log(error);
  });
