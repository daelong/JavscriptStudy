// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key: value};

const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 }; //object name은 key ellie는 value
print(ellie);

ellie.hasJob = true; // js는 runtime때 타입이 정해지는 언어라 뒤늦게 프로퍼티를 추가할 수 있음 but 안하는게 좋음
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); //이걸쓰는건 코딩하는 순간에 키에 해당하는 값을 받고싶을 때 사용
console.log(ellie["name"]); // computed properties(배열에서 접근하는거) name을 string형태로 접근 이건 정확하게 어떤 키가 필요한지 모를때 사용함
ellie["hasJob"] = true;
console.log(ellie.hasJob);

// function printValue(obj, key) {
//   //key는 string타입으로 전달해야함
//   console.log(obj.key); //이렇게 하면 오류
// }
// printValue(ellie, "name");

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 }; //'object literal' syntax
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30); //'object constructor' syntax
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  //class같은 역할을 함, 다른 계산을 안하고 순수하게 오브젝트를 생성하는 함수들은 대문자로 시작, return하지 않고 this.name = name;식으로 함
  //   return {
  //     name, //name: name, 키랑 벨류 같으면 생략가능
  //     age, //age: age,
  //   };
  this.name = name;
  this.age = age;
}

// 5. in operator: property existence check ( key in obj)
console.log("name" in ellie); //object안에 key가 있는지 없는지 확인하는 것
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
// console.clear();
for (key in ellie) {
  // object인 ellie가 가진 key들이 블럭을 돌때마다 key라는 지역변수에 할당됨
  console.log(key); //이러면 ellie안에 있는 key들이 다 나옴
}

// for (value of iterable) object를 쓰는것이 아니라 배열 리스트, 순차적으로 iterable한 것들을 쓰는것
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//
// 더 쉽게
for (value of array) {
  console.log(value);
}

//7. cloning
// Object.assign(dest, [obj1, obj2, obj3....])
const user = { name: "ellie", age: "20" };
const user2 = user; //user2에도 user의 값을 동일하게 할당한다는 것
user2.name = "coder"; //user2 name이 바뀌면
console.log(user); //user이름도 바뀜 왜냐면 같은 ref를 사용하고 있기 때문

//이러지 않고 object를 복사하는 방법
//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
// console.clear();
console.log(user3);
user3.name = "hi";
console.log(user);
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({ location: "cafe" }, user);
console.log(user4);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는애가 앞에 있는애랑 같은 property가 있으면 덮어씌움
console.log(mixed); // color: blue, size: big
