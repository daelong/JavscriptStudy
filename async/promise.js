"use strict";

// Promise is a JavaScript object for asynchronous operation -> call back함수 대신 쓸수 있음

// point! 1. state, 2. producer, consumer의 차이점 알기
// state: pending -> fullfilled state가 됨 or rejected(파일 찾을수 없거나 네트워크에 문제가 생기면)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatication
const promise = new Promise((resoleve, reject) => {
  //doing some heavy work (network,read files) -> 네트워크에서 데이터를 받아오거나 파일에서 데이터 읽는건 시간이 오래걸리는데 synchronous로 처리하면 데이터를 받고 다음 라인의 작업이 처리되지 않기때문에 시간이 걸리는 일은 promise로 비동기적으로 처리한다.
  console.log("doing something..."); //proimse를 만드는 순간 전달한 executor함수가 바로 실행이됨 -> 네트워크 연결을 한다면 -> 사용자가 버튼을 눌렀을때 네트워크 요청을 해야한다면 이런식으로 작성하면 불필요한 네트워크 요청이 오갈수 있음
  setTimeout(() => {
    resoleve("ellie");
    // reject(new Error("no network")); //주로 Error 오브젝트로 값을 전달함.
  }, 2000);
});

// 2. Consumers: then, catch, finally 로 값을 받아올수 있음
promise //
  .then((value) => {
    console.log(value);
  }) //값이 정상적으로 잘 수행이 된다면(then) => 마지막에 최종적으로 resolve를 통해서 전달한 값이 value의 파라미터로 전달되어서 옴
  .catch((error) => {
    //error callback 처리
    console.log(error);
    //즉, then을 호출하게되면 다시 promise가 리턴되고 리턴된 프로미스의 캐치를 등록하는 것
  })
  .finally(() => {
    console.log("finally");
    //성공하든 실패하든 마지막에 무조건 실행됨
  });

//전체적흐름 : promise 오브젝트를 만들때 비동기적으로 실행하고싶은 기능들을 promise에 작성하고 성공적으로 잘하면 resolve호출, 실패하면 reject 호출  그 후 promise.then, promise.catch를 이용해서 성공한 값과 실패한 에러를 가져와서 원하는 방식으로 처리

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
// 이렇게 다른 비동기적인 애들을 여러개 묶어서 처리할 수 도 있음

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (prev) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${prev} => 달걀`)), 1000);
  });
const cook = (prev) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${prev} => 계란프라이`), 1000);
  });

getHen()
  .then(getEgg) // (hen) => getEgg(hen)를 그냥 getEgg로 표현 가능(한가지만 받아서 전달할때)
  .catch((error) => {
    // getEgg에서 발생하는 문제는 바로 catch를 사용해서 에러처리할 수 있다.
    return "빵";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
