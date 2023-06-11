import { createStore } from "redux";

const initialValue = {
  compA: "a",
  compB: 12,
  compC: null,
};

// initialValue.compA = 'b' 이런 식으로 바꾸지 못한다. 장점이자 단점. 편리함을 낮추지만 추적 할 수 있다.

const reducer = (prevStore, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevStore,
        compA: action.data,
      };
    default:
      return prevStore;
  }
};
const store = createStore(reducer, initialValue);
console.log(store.getState());

// action 확장성있게 추상화하자.
// 좋지 않은 예, 구체적이다. A->B로 뿐이 못 바꾼다. 만약 A->C로 바꾸고 싶다면 새로운 객체를 만들어야한다.
const changeCompAtoB = {
  type: "CHANGE_COMP_A",
  data: "b",
};
store.subscribe(() => {
  console.log("changed");
});

const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));
console.log(store.getState());
