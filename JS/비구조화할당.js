const ironMan = {
  name: "test",
  target: { value: "hello" },
  adress: "incheon",
};

const { name, age, adress } = ironMan;

const {
  target: { value },
} = ironMan;

console.log(value);
