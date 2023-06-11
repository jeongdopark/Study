# Promise

--

## 목차

[Promise란 ?](#Promise란-?)

## Promise란 ?

<br>
- Promise는 자바스크립트 비동기 처리에 사용되는 객체입니다. <br>
[ 비동기 처리 : 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행처리 ] <br>
ES6에서 도입되었습니다. <br>
Promise의 동작을 살펴보기 전, 기존의 콜백함수를 통한 비동기 처리를 방식을 짚어보면 Promise의 장점을 확실히 체감할 수 있을 것 같습니다. <br>
<br>
<br>

### 1. 응답 결과 받을 때

<br>

```js
let response;
const getA = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  // onload 비동기로 동작.
  xhr.onload = () => {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.response);
    }
  };
};

getA(url);
console.log(response); // undefined
```

비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없습니다. <br>
비동기 함수의 처리 결과에 대한 후속 처리는 콜백 함수를 전달하는 것이 일반적입니다.

```js
let response;
const getA = (url, successCb, failCb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  // onload 비동기로 동작.
  xhr.onload = () => {
    if (xhr.status === 200) {
      successCb(JSON.parse(xhr.response));
    } else {
      failCb(xhr.status);
    }
  };
};

getA(url, console.log, console.err);
```

하지만 비동기 처리 결과에 동작하는 콜백 함수 또한 비동기 함수일 경우는 콜백 지옥이 시작됩니다. <br>

```js
get("url1", (a) => {
  get(`url2/${a}`, (b) => {
    get(`url3/${b}`, (c) => {
      console.log(c);
    });
  });
});
```

### 2. 에러 처리의 한계

비동기 처리를 위한 콜백 함수에서는 에러 처리가 어렵습니다.

```js
try {
  setTimeout(() => {
    throw new Error("Error");
  }, 1000);
} catch (e) {
  console.error(e);
}
```
