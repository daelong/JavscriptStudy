// JSON
// JavaScript Object Notation

// 1. Object to JSON => use JSON object
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]); // array -> json
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol("id"), //이런 js에만 있는 것들도 json에 포함되지 않음
  jump: () => {
    //이 함수는 json에 포함되지 않음 왜냐면 object에 있는 데이터가 아니기 때문에
    console.log(`${name} can jump!`);
  },
};
json = JSON.stringify(rabbit); //class => json
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // 뒤에 ,를 붙이면 replacer가 있음 함수형으로 전달해도 되고 배열형태로 전달해도됨
//원하느 ㄴproperty만 골라서 json으로 변환가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  //replacer는 key와 value를 전달받는 callback함수를 정의하면
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value; //key가 name이면 name의 value를 ellie로 바꾸고 아니면 그냥 value로 설정
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json); //이렇게하면 오로지 모든 데이터를 string으로만 받아야함
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value; // key가 birthDate면 new Date(value)해서 Date 타입으로 만들어주고 key가  birthDate가 아니면 value를 그냥 쓴다
});
console.log(obj);
rabbit.jump(); //이건 미리 위에서 설정한거라 jump메소드가 있음
// obj.jump(); //이건 json에서 받은거라 jump메소드가 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //이것도 string이라 getDate안댐
console.log(obj.birthDate.getDate());
